import _ from 'lodash'
import Vue from 'vue'
import Product from './Product'
import {
  URL_CONSIGNEE_CREATE,
  URL_CONSIGNEE_DEF,
  URL_CONSIGNEE_LIST,
  URL_CONSIGNEE_REMOVE,
  URL_CONSIGNEE_UPDATE
} from '../api'

import {
  CONSIGNEE_DEFAULT,
  CONSIGNEE_NORMAL
} from '../const'

class Address {
  /**
   * create an address instance
   * @param province {String}
   * @param city {String}
   * @param area {String}
   * @param detail {String}
   */
  constructor(province, city, area, detail) {
    this.province = province;
    this.city = city;
    this.area = area;
    this.detail = detail;
  }
}


export default class Consignee extends Product {

  /**
   * create a consignee instance
   * @param name {String}
   * @param mobile {String}
   * @param address {Address}
   * @param [isDefault=0] {Number}
   */
  constructor(name, mobile, address, isDefault = CONSIGNEE_DEFAULT) {
    super();

    this.name = name;
    this.mobile = mobile;
    this.isDef = isDefault;
    _.merge(this, address);
  }

  /**
   * save consignee
   * @param memberId {String|Number}
   * @returns {Promise}
   */
  save(memberId) {
    return Consignee.create(this, memberId);
  }

  /**
   * update consignee
   * @param id {Number|String}
   * @param memberId {Number|String}
   * @returns {Promise}
   */
  update(id, memberId) {
    return Consignee.updateById(id, memberId, this);
  }

  /**
   * create a consignee
   * @param consignee {Consignee}
   * @param memberId {String|Number}
   * @returns {Promise}
   */
  static create(consignee, memberId) {
    consignee.memid = memberId;
    return this._sendRequest(URL_CONSIGNEE_CREATE, Object.assign({},consignee));
  }

  /**
   * update a consignee
   * @param id {String|Number}
   * @param memberId {String|Number}
   * @param consignee {Consignee}
   * @returns {Promise}
   */
  static updateById(id, memberId, consignee) {
    consignee.receid = id;
    consignee.memid = memberId;

    return this._sendRequest(URL_CONSIGNEE_UPDATE, consignee);
  }

  /**
   * remove a consignee
   * @param id {Number|String}
   * @returns {Promise}
   */
  static removeById(id) {
    return this._sendRequest(URL_CONSIGNEE_REMOVE, {receid: id});
  }

  /**
   * 获取收货人列表
   * @static
   * @returns {Array}
   */
  static fetch(memberId) {
    return this._sendRequest(URL_CONSIGNEE_LIST, {memid: memberId});
  }

  /**
   * get the default consignee
   * @param memberId
   * @returns {Promise}
   */
  static getDefault(memberId) {
    return this._sendRequest(URL_CONSIGNEE_DEF, {memid: memberId});
  }
}

export {Address, Consignee};