import {
  URL_SHOPPING_CART_ADD,
  URL_SHOPPING_CART_REMOVE,
  URL_SHOPPING_CART_UPDATE,
  URL_SHOPPING_CART_LIST
}
from '../api'

import Vue from 'vue'

export default class ShoppingCart {
  constructor() {

  }

  static fetch(memberId) {
    var params = {
      memid: memberId
    };

    return Vue.http.post(URL_SHOPPING_CART_LIST, params);
  }

  static addById(productId, memberId, amount) {
    var params = {
      id: productId,
      memid: memberId,
      num: amount
    };

    return Vue.http.post(URL_SHOPPING_CART_ADD, params);
  }

  static updateById(cartId, amount) {
    var params = {
      cartid: cartId,
      num: amount
    };

    return Vue.http.post(URL_SHOPPING_CART_UPDATE, params);
  }

  static removeById(cartId) {
    var params = {
      cartid: cartId
    };

    return Vue.http.post(URL_SHOPPING_CART_REMOVE, params);
  }
}
