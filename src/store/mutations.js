import _ from 'lodash'
import {
  CONSIGNEE_NORMAL, CONSIGNEE_DEFAULT
}
from '../const'

export const MUTATION_SYNC_CART = 'SYNC_CART';
export const MUTATION_ADD_CART_ITEM = 'ADD_CART_ITEM';
export const MUTATION_REMOVE_CART_ITEM = 'REMOVE_CART_ITEM';
export const MUTATION_UPDATE_CART_ITEM = 'UPDATE_CART_ITEM';

export const MUTATION_SYNC_CONSIGNEES = 'SYNC_CONSIGNEES';
export const MUTATION_ADD_CONSIGNEE = 'CREATE_CONSIGNEES';
export const MUTATION_UPDATE_CONSIGNEES = 'UPDATE_CONSIGNEES';
export const MUTATION_REMOVE_CONSIGNEES = 'REMOVE_CONSIGNEES';

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
   * @param cartItems {Array}
   */
  [MUTATION_SYNC_CART](state, cartItems) {
    _.forEach(cartItems, item => {
      item.num = Number(item.num);
      item.price = Number(item.price);
      item.selected = true;
    });
    state.cartItems = cartItems;
  },


  /**
   * 同步收货人列表
   * @param state
   * @param consignees {Array<Consignee>}
   */
  [MUTATION_SYNC_CONSIGNEES](state, consignees) {

    _.forEach(consignees, item => {
      item.active = false;
      item.selected = item.isDefault == CONSIGNEE_DEFAULT;
    });
    
    state.consignees = consignees;
  },

  /**
   * 添加收货人到列表
   * @param state
   * @param consignee {Consignee}
   */
  [MUTATION_ADD_CONSIGNEE](state, consignee) {
    consignee.active = false;
    consignee.selected = true;

    //如果添加的收货人已经设置为默认，其它的收货人取消默认
    if (consignee.isDefault === CONSIGNEE_DEFAULT) {

      _.forEach(state.consignees, item => {
        item.isDefault = CONSIGNEE_NORMAL;
      });
    }
    state.consignees.push(consignee);
  },

  /**
   * 从列表中删除指定ID的收货人
   * @param state
   * @param id
   */
  [MUTATION_REMOVE_CONSIGNEES](state, id) {
    let item = _.find(state.consignees, {
      receid: id
    });
    state.consignees.$remove(item);
  },

  /**
   * 更新收货人信息
   * @param state
   * @param id
   * @param consignee {Consignee}
   */
  [MUTATION_UPDATE_CONSIGNEES](state, id, consignee) {

    let item = _.find(state.consignees, {
      receid: id
    });

    _.merge(item, consignee);
  }
}
