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
		return Request(URL_ORDER_CANCEL, {orderid})
		
	}
	
	static pay() {
		
		return new Promise((resolve, reject)=> {
			
			try {
				wx.chooseWXPay({
					timestamp: 0, // 支付签名时间戳，注意微信jssdk中的所有使用timestamp字段均为小写。但最新版的支付后台生成签名使用的timeStamp字段名需大写其中的S字符
					nonceStr: '', // 支付签名随机串，不长于 32 位
					package: '', // 统一支付接口返回的prepay_id参数值，提交格式如：prepay_id=***）
					signType: '', // 签名方式，默认为'SHA1'，使用新版支付需传入'MD5'
					paySign: '', // 支付签名
					success: function (res) {
						// 支付成功后的回调函数
						resolve(res);
					}
				});
			} catch (e) {
				reject(e);
				console.log(e.message);
			}
			
		});
		
	}
}
