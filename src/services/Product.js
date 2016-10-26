import {
	URL_PRODUCT_REC,
	URL_PRODUCT_LIST,
	URL_PRODUCT_DETAIL,
	URL_CATEGORY_LIST,
	URL_INDEX_BANNER,
	URL_PRODUCT_SEARCH
}
	from '../api'

import Request from './Request'

export default class Product {

	/**
	 * 根据产品类型获取产品列表
	 * @param category {String}
	 * @returns {Promise}
	 */

	static fetch(category) {
		var params = {
			id: category
		};

		return Request(URL_PRODUCT_LIST, params);
	}

	/**
	 * 获取推荐产品列表
	 * @returns {Promise}
	 */
	static fetchRecommend() {
		return Request(URL_PRODUCT_REC);
	}


	/**
	 * 搜索产品
	 * @param keyword
	 * @param currenPage
	 * @param pageSize
	 */
	static search(keyword, currenPage, pageSize = 20) {
		return Request(URL_PRODUCT_SEARCH,{keyword,currenPage,pageSize});
	}

	/**
	 * 获取产品类型列表
	 * @returns {Promise}
	 */
	static fetchCategory() {
		return Request(URL_CATEGORY_LIST);
	}


	/**
	 * 通过产品ID获取产品详情
	 * @param productId {String}
	 * @returns {Promise}
	 */
	static getById(productId) {
		var params = {
			goodsid: productId
		};
		return Request(URL_PRODUCT_DETAIL, params);
	}

	/**
	 * 获取首页banner
	 * @returns {Promise}
	 */
	static getBanner() {
		return Request(URL_INDEX_BANNER);
	}
}
