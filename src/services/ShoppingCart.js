import {
  URL_SHOPPING_CART_ADD,
  URL_SHOPPING_CART_REMOVE,
  URL_SHOPPING_CART_UPDATE,
  URL_SHOPPING_CART_LIST
}
from '../api'

import Vue from 'vue'

/**
 * 
 * ShoppingCart service
 * @export
 * @class ShoppingCart
 */
export default class ShoppingCart {

  /**
   * 
   * fetch cart product list from servier
   * @static
   * @param {Number|String} memberId 用户ID
   * @returns {Promise}
   */
  static fetch(memberId) {
    var params = {
      memid: memberId
    };

    return Vue.http.post(URL_SHOPPING_CART_LIST, params);
  }

  
  /**
   * 
   * add product to shopping cart
   * @static
   * @param {Number|String} productId (产品ID)
   * @param {Number|String} memberId (用户ID) 
   * @param {Number} amount (产品数量)
   * @returns {Promise}
   */
  static addById(productId, memberId, amount) {
    var params = {
      id: productId,
      memid: memberId,
      num: amount
    };

    return Vue.http.post(URL_SHOPPING_CART_ADD, params);
  }

  
  /**
   * 
   * update cart product via cartid
   * @static
   * @param {Number|String} cartId
   * @param {Number} amount
   * @returns {Promise}
   */
  static updateById(cartId, amount) {
    var params = {
      cartid: cartId,
      num: amount
    };

    return Vue.http.post(URL_SHOPPING_CART_UPDATE, params);
  }

  /**
   * 
   * remove cart product via cartid
   * @static
   * @param {Number|String} cartId
   * @returns {Promise}
   */
  static removeById(cartId) {
    var params = {
      cartid: cartId
    };

    return Vue.http.post(URL_SHOPPING_CART_REMOVE, params);
  }
}
