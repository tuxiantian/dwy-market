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

  /**
   * 发送请求
   * @param  {String} url    请求地址
   * @param  {Object} params 请求参数
   * @return {Promise}
   */
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

  /**
   * get product list by category
   * @param  {Number} category
   * @return {Promise}
   */
  static fetch(category) {
    var params = {
      id: category
    };

    return this._sendRequest(URL_PRODUCT_LIST, params);
  }


  /**
   * get recommend product list
   * @return {Promise}
   */
  static fetchRecommend() {
    return this._sendRequest(URL_PRODUCT_REC);
  }

  /**
   * get category list
   * @return {Promise}
   */
  static fetchCategory() {
    return this._sendRequest(URL_CATEGORY_LIST);
  }

  /**
   * get product detail by product id
   * @param  {String} productId
   * @return {Promise}           
   */
  static getById(productId) {
    var params = {
      goodsid: productId
    };
    return this._sendRequest(URL_PRODUCT_DETAIL, params);
  }
}
