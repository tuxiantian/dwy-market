import _ from 'lodash'

export const MUTATION_SYNC_CART = 'SYNC_CART';
export const MUTATION_ADD_CART_ITEM = 'ADD_CART_ITEM';
export const MUTATION_REMOVE_CART_ITEM = 'REMOVE_CART_ITEM';
export const MUTATION_UPDATE_CART_ITEM = 'UPDATE_CART_ITEM';

export default {

  /**
   * 添加商品到购物车
   * @param state
   * @param cartItem
   */
  [MUTATION_ADD_CART_ITEM](state, cartItem) {
    state.cartItems.push(cartItem);
  },

  /**
   * 从购车删除
   * @param state
   * @param id
   */
  [MUTATION_REMOVE_CART_ITEM](state, id) {
    let item = _.find(state.cartItems, {
      cartid: id
    });
    state.cartItems.$remove(item);
  },

  /**
   * 同步购物车数据
   * @param state
   * @param mutation
   */
  [MUTATION_SYNC_CART](state, cartItems) {
    _.forEach(cartItems, item => {
      item.num = Number(item.num);
      item.price = Number(item.price);
      item.selected = true;
    });
    state.cartItems = cartItems;
  }
}
