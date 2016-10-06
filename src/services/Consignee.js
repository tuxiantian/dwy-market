import Request from './Request'
import {
  URL_CONSIGNEE_CREATE,
  URL_CONSIGNEE_DEF_GET,
  URL_CONSIGNEE_DEF_SET,
  URL_CONSIGNEE_LIST,
  URL_CONSIGNEE_REMOVE,
  URL_CONSIGNEE_UPDATE
}
  from '../api'

import {
  CONSIGNEE_DEFAULT
}
  from '../const'

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


export default class Consignee {
  
  /**
   * create a consignee instance
   * @param name {String}
   * @param mobile {String}
   * @param address {Address}
   * @param [isDefault=0] {Number}
   */
  constructor(name, mobile, address, isDefault = CONSIGNEE_DEFAULT) {
    
    this.name = name;
    this.mobile = mobile;
    this.isDef = isDefault;
    Object.assign(this, address);
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
    
    return Request(
      URL_CONSIGNEE_CREATE,
      Object.assign({}, consignee)
    );
  }
  
  /**
   * update a consignee
   * @param receid {String|Number}
   * @param memid {String|Number}
   * @param consignee {Consignee}
   * @returns {Promise}
   */
  static updateById(receid, memid, consignee) {
    
    let params = {receid, memid};
    
    Object.assign(params, consignee);
    
    return Request(URL_CONSIGNEE_UPDATE, params);
  }
  
  /**
   * remove a consignee
   * @param receid {Number|String}
   * @returns {Promise}
   */
  static removeById(receid) {
    return Request(URL_CONSIGNEE_REMOVE, {receid});
  }
  
  /**
   * 获取收货人列表
   * @param memid {String}
   * @returns {Promise}
   */
  static fetch(memid) {
    return Request(URL_CONSIGNEE_LIST, {memid});
  }
  
  /**
   * get the default consignee
   * @param memid {String}
   * @returns {Promise}
   */
  static getDefault(memid) {
    return Request(URL_CONSIGNEE_DEF_GET, {memid});
  }
  
  /**
   * 设置默认联系人
   * @param receid
   * @returns {Promise}
   */
  static setDefault(receid) {
    
    return Request(
      URL_CONSIGNEE_DEF_SET,
      {receid, isDef: CONSIGNEE_DEFAULT}
    );
  }
}

export {
  Address, Consignee
};
