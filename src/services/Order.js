import Request from './Request'

import {
  URL_ORDER_CREATE,
  URL_ORDER_LIST,
  URL_ORDER_DETAIL,
  URL_ORDER_REMOVE,
  URL_ORDER_CANCEL,
  URL_ORDER_PAY
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
  constructor(memberId, consigneeId, orderProductItems, remark) {
    
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
  static fetchByStatus(memid, status) {
    return Request(URL_ORDER_LIST, {memid, status});
  }
  
  /**
   * get order detail via order id
   * @param  {String|Number} orderid
   * @return {Promise}
   */
  static getById(orderid) {
    return Request(URL_ORDER_DETAIL, {orderid});
  }
  
  /**
   * remove order via orderid
   * @param  {Number|String} orderid
   * @return {Promise}
   */
  static removeById(orderid) {
    return Request(URL_ORDER_REMOVE, {orderid});
  }
  
  /**
   * cancel order via orderid
   * @param  {String} orderid
   * @return {Promise}
   */
  static cancelById(orderid) {
    return Request(URL_ORDER_CANCEL, {orderid});
  }
  
  
  /**
   *
   * @param money {Number}
   * @param orderno {String}
   * @param memid {String}
   * @returns {Promise}
   */
  static pay(money, orderno, memid) {
    
    
    return new Promise((resolve, reject)=> {
      
      Request(URL_ORDER_PAY, {money: parseInt(money), orderno, memid})
        .then(resp=> {
          
          var {timeStamp, nonce_str, prepay_id, sign} = resp.data;
          
          /*var params = {
           appid: "wxd5f80fc7fd07d457",
           id: "oW29Ovy_b94FmOcq72xaSIAgJFnk",
           money: "1",
           nonce_str: "yC6UcMKHIrD4u0oAF517e8UrFdF22rms",
           prepay_id: "wx20161030105148ca031137ab0500244774",
           sign: "C178F57955380B7F1C70695EBF574381",
           timeStamp: "1477795797"
           };*/
          
          try {
            wx.chooseWXPay({
              // 支付签名时间戳，
              // 注意微信jssdk中的所有使用timestamp字段均为小写。
              // 但最新版的支付后台生成签名使用的timeStamp字段名需大写其中的S字符
              timestamp: timeStamp,
              
              // 支付签名随机串，不长于 32 位
              nonceStr: nonce_str,
              
              // 统一支付接口返回的prepay_id参数值，提交格式如：prepay_id=***）
              package: `prepay_id=${prepay_id}`,
              
              // 签名方式，默认为'SHA1'，使用新版支付需传入'MD5'
              signType: 'SHA1',
              
              // 支付签名
              paySign: sign,
              
              success: resolve,
              
              error: reject
            });
          } catch (e) {
            reject(e);
          }
          
        })
        .catch(err=> {
          reject(err);
        });
    });
    
  }
}
