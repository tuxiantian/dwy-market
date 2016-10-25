import {
  URL_USER_INFO,
  URL_REWARD_DETAIL,
  URL_REWARD_LIST,
  URL_ACCOUNT_DETAIL,
  URL_FANS_LIST
} from '../api'
import Request from '../services/Request'

export default class User {
  constructor() {
    
  }
  
  /**
   * 获取用户信息
   * @param superior {String|Number} 推荐人id
   * @returns {Promise}
   */
  static getInfo(superior = '') {
    return Request(URL_USER_INFO, {superior});
  }
  
  /**
   * 获取奖励明细
   * @param id {String|Number}
   * @param days {Number}
   * @returns {Promise}
   */
  static getRewardDetail(id,days=7) {
    return Request(URL_REWARD_DETAIL,{id,days});
  }
  
  /**
   * 获取奖励列表
   * @param id {String|Number}
   * @param days {Number}
   * @returns {Promise}
   */
  static queryRewardList(id,days=7){
    return Request(URL_REWARD_LIST,{id,days});
  }
  
  /**
   * 获取帐户明细
   * @param id {String|Number}
   * @returns {Promise}
   */
  static getAccountDetail(id){
    return Request(URL_ACCOUNT_DETAIL,{id});
  }
  
  /**
   * 获取粉丝列表
   * @param id {String|Number}
   * @returns {Promise}
   */
  static queryFansList(id){
    return Request(URL_FANS_LIST,{id});
  }
}
