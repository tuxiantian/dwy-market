import {
  URL_SHOPPING_CART_ADD,
  URL_SHOPPING_CART_REMOVE,
  URL_SHOPPING_CART_UPDATE
} from '../api'

import Vue from 'vue'

export default class ShoppingCart {
  constructor() {

  }
  
  static fetch(){
    
  }
  
  static addById(productId, amount) {
    var params={
      id:productId,
      amount:amount
    };

    return Vue.http.post(URL_SHOPPING_CART_ADD,params);
  }

  static updateById(cartId,amount) {
    var params={
      id:cartId,
      amount:amount
    };

    return Vue.http.post(URL_SHOPPING_CART_UPDATE,params);
  }

  static removeById(cartId) {
    var params={
      id:cartId
    };

    return Vue.http.post(URL_SHOPPING_CART_REMOVE,params);
  }
}