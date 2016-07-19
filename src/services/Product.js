import {
  URL_PRODUCT_REC,
  URL_PRODUCT_LIST,
  URL_PRODUCT_DETAIL,
  URL_CATEGORY_LIST
}
from '../api'
import Vue from 'vue'
export default class Product {
  constructor() {

  }
  static fetch(category) {
    var params = {
      type: category
    };

    return Vue.http.post(URL_PRODUCT_LIST, params);
  }


  static fetchRecommend(){
    return Vue.http.post(URL_PRODUCT_REC);
  }

  static fetchCategory(){
    return Vue.http.post(URL_CATEGORY_LIST);
  }

  static getById(productId){

  }
}
