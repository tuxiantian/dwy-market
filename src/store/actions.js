import {
  MUTATION_ADD_CART_ITEM,
  MUTATION_REMOVE_CART_ITEM,
  MUTATION_SYNC_CART,
  MUTATION_UPDATE_CART_ITEM
}
from './mutations'

import ShoppingCart from '../services/ShoppingCart'

/**
 * 同步购物车商品列表
 * @param  {Object} store
 * @return {void}
 */
export function syncCartItems(store) {
  ShoppingCart.fetch()
    .then(resp => {
      store.dispatch(MUTATION_SYNC_CART, resp.data);
    });
}

/**
 * 添加商品到购物车
 * @param {Object} store
 * @param {Number} id     商品ID
 * @param {Number} amount 商品数量
 */
export function addCartItem(store, id, amount) {
  ShoppingCart.addById(id, amount)
    .then(resp => {
      store.dispatch(MUTATION_ADD_CART_ITEM, resp.data);
      this.$emit(MUTATION_ADD_CART_ITEM);
    });
}

/**
 * 更新商品数量
 * @param  {Object} store
 * @param  {Number} id     productId
 * @param  {Number} amount product amount
 * @return {void}
 */
export function updateCartItem(store, id, amount) {
  ShoppingCart.updateById(id, amount)
    .then(resp => {
      store.dispatch(MUTATION_UPDATE_CART_ITEM, resp.data);
    })
}

/**
 * 删除购物车里的商品
 * @param  {Object} store
 * @param  {Number} id    product id
 * @return {void}
 */
export function removeCartItem(store, id) {
  ShoppingCart.removeById(id)
    .then(resp => {
      store.dispatch(MUTATION_REMOVE_CART_ITEM, id)
      this.$emit(MUTATION_REMOVE_CART_ITEM);
    });
}
