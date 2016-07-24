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
  static _sendRequest(url, params) {
    return new Promise(function(resolve, reject) {
      Vue.http.post(url, params)
        .then(resp => {
          var data = resp.data;
  
          if (data.respCode == 0) {
            return reject(resp);
          }

          resolve(data);
        })
        .catch(err => {
          reject(err);
        });
    });
  }
  static fetch(category) {
    var params = {
      id: category
    };

    return this._sendRequest(URL_PRODUCT_LIST, params);
  }


  static fetchRecommend() {
    return this._sendRequest(URL_PRODUCT_REC);
  }

  static fetchCategory() {
    return this._sendRequest(URL_CATEGORY_LIST);
  }

  static getById(productId) {
    var params = {
      goodsid: productId
    };
    return this._sendRequest(URL_PRODUCT_DETAIL, params);
  }
}
