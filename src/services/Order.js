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


  /**
   * fetch order list via order status
   * @param  {String} memberId [description]
   * @param  {Number} status   [description]
   * @return {Promise}          [description]
   */
  static fetchByStatus(memid,status){
    return Request(URL_ORDER_LIST,{memid,status});
  }

  /**
   * get order detail via order id
   * @param  {String|Number} orderid
   * @return {Promise}
   */
  static getById(orderid){
    return Request(URL_ORDER_DETAIL,{orderid});
  }

  /**
   * remove order via orderid
   * @param  {Number|String} orderid
   * @return {Promise}
   */
  static removeById(orderid){
    return Request(URL_ORDER_REMOVE,{orderid});
  }

  /**
   * cancel order via orderid
   * @param  {String} orderid
   * @return {Promise}
   */
  static cancelById(orderid){
    return Request(URL_ORDER_CANCEL,{orderid})

  }
}
