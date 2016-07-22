import _ from 'lodash'

export const MUTATION_SYNC_CART='SYNC_CART';
export const MUTATION_ADD_CART_ITEM='ADD_CART_ITEM';
export const MUTATION_REMOVE_CART_ITEM='REMOVE_CART_ITEM';
export const MUTATION_UPDATE_CART_ITEM='UPDATE_CART_ITEM';

export default {

  /**
   * 添加商品到购物车
   * @param state
   * @param mutation
   */
  [MUTATION_ADD_CART_ITEM](state,cartItem){
    state.cartItems.push(cartItem);
  },

  /**
   * 从购车删除
   * @param state
   * @param mutation
   */
  [MUTATION_REMOVE_CART_ITEM](state,id){
    let item=_.findWhere(state.cartItems,{id:id});
    state.cartItems.$remove(item);
  },

  /**
   * 同步购物车数据
   * @param state
   * @param mutation
   */
  [MUTATION_SYNC_CART](state,cartItems){
    state.cartItems=cartItems;
  },

  /**
   * 更新购物车产品数量
   * @param state
   * @param id
   * @param amount
   */
  [MUTATION_UPDATE_CART_ITEM](state,id,amount){
    let item=_.findWhere(state.cartItems,{id:id});
    if(item){
      item.amount=amount;
    }else{
      console.warn('Can not found cart item where id='+id);
    }
  }
}