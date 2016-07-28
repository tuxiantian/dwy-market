import Vue from 'vue'
import Product from './Product'
import {
  URL_ORDER_CREATE,
  URL_ORDER_LIST,
  URL_ORDER_DETAIL,
  URL_ORDER_REMOVE,
  URL_ORDER_CANCEL
} from '../api'


export class OrderProductItem{

  /**
   * create an order product instance
   * @param  {String} productId
   * @param  {Number} amount    product amount
   * @return {OrderProductItem}
   */
  constructor(productId,amount){
    this.goodsid=productId;
    this.num=amount;
  }
}

export default class Order extends Product {

  /**
   * create an order instance
   * @param  {String} memberId
   * @param  {String} consigneeId
   * @param  {String} remark
   * @param  {Array<OrderProductItem>} orderProductItems
   * @return {Order}
   */
  constructor (memberId,consigneeId,remark,orderProductItems){
    super();
    this.memid=memberId;
    this.receid=consigneeId;
    this.remark=remark;
    this.goods=JSON.stringify(orderProductItems);
  }

  /**
   * save an order instance
   * @return {Promise}
   */
  save(){
    return Order.create(this);
  }

  /**
   * create an order
   * @param  {Order} order
   * @return {Promise}
   */
  static create (order){
    return this._sendRequest(URL_ORDER_CREATE,Object.assign({},order));
  }

  static fetch(){
    return this._sendRequest(URL_ORDER_LIST);
  }

  static getById(orderId){

  }

  static removeById(orderId){

  }

  static cancelById(orderId){

  }
}
