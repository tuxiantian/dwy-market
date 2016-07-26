import {
  MUTATION_ADD_CART_ITEM,
  MUTATION_REMOVE_CART_ITEM,
  MUTATION_SYNC_CART,
  MUTATION_UPDATE_CART_ITEM
}
from './mutations'
import _ from 'lodash'
import ShoppingCart from '../services/ShoppingCart'

/**
 * 同步购物车商品列表
 * @param  {Object} store
 * @param {Number|String} uid
 * @return {void}
 */
export function syncCartItems(store, uid) {
  ShoppingCart.fetch(uid)
    .then(resp => {
      store.dispatch(MUTATION_SYNC_CART, resp.data.datalist);
    });
}

/**
 * 添加商品到购物车
 * @param {Object} store
 * @param {Number} productId  商品ID
 * @param {Number} [uid] 用户ID
 */
export function insertOrUpdate(store, params) {
  var cartItem = _.find(store.state.cartItems, {
    id: params.productId
  });

  //如果在列表里找到此cartItem，说明已经存在，这时，更新数量
  //如果不存在，则增加
  if (cartItem) {
    if (!params.amount) {
      params.amount = cartItem.num + 1;
    }

    ShoppingCart.updateById(cartItem.cartid, params.amount)
      .then(() => {
        cartItem.num = params.amount;
      });
  } else {
    ShoppingCart.addById(params.productId, params.uid, 1)
      .then(resp => {
        var item = resp.data.datalist;

        item.num = Number(item.num);
        item.price = Number(item.price);
        item.selected=true;
        store.dispatch(MUTATION_ADD_CART_ITEM, item);
        this.$emit(MUTATION_ADD_CART_ITEM);
      });
  }
}

/**
 * 删除购物车里的商品
 * @param  {Object} store
 * @param  {Number} id    cart id
 * @return {void}
 */
export function removeCartItem(store, id) {
  ShoppingCart.removeById(id)
    .then(resp => {
      store.dispatch(MUTATION_REMOVE_CART_ITEM, id);
      this.$emit(MUTATION_REMOVE_CART_ITEM);
    });
}
