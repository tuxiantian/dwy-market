import Request from './Request'

import {
  URL_ORDER_CREATE,
  URL_ORDER_LIST,
  URL_ORDER_DETAIL,
  URL_ORDER_REMOVE,
  URL_ORDER_CANCEL
} from '../api'

export class OrderProductItem {
  /**
   * create an order product instance
   * @param  {String} productId,
   * @param  {Number} amount    product amount
   * @return {OrderProductItem}
   */
  constructor(productId, amount) {
    this.goodsid = productId;
    this.num = String(amount);
  }
}

export default class Order {
  
  /**
   * create an order instance
   * @param memberId {String}
   * @param consigneeId {String}
   * @param orderProductItems {Array<OrderProductItem>}
   * @param [remark] {String}
   */
  constructor(memberId, consigneeId, orderProductItems,remark) {

    this.memid = memberId;
    this.receid = consigneeId;
    this.remark = remark;
    this.goods = JSON.stringify(orderProductItems);
  }
  
  /**
   * save an order instance
   * @return {Promise}
   */
  save() {
    return Order.create(this);
  }
  
  /**
   * create an order
   * @param  {Order} order
   * @return {Promise}
   */
  static create(order) {
    return Request(URL_ORDER_CREATE, Object.assign({}, order));
  }
  
  static fetchByStatus(status) {
    return Request(URL_ORDER_LIST, {status});
  }
  
  /**
   * 通过订单ID获取订单详情
   * @param id {String}
   * @returns {Promise}
   */
  static getById(id) {
    return Request(URL_ORDER_DETAIL, {id});
  }
  
  /**
   * 根据Id删除订单
   * @param id {String}
   * @returns {Promise}
   */
  static removeById(id) {
    return Request(URL_ORDER_REMOVE, {id});
  }
  
  /**
   * 取消订单
   * @param id {String}
   * @returns {Promise}
   */
  static cancelById(id) {
    return Request(URL_ORDER_CANCEL, {id})
  }
}
