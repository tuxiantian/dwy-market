import {
  URL_USER_INFO,
  URL_REWARD_DETAIL,
  URL_REWARD_LIST,
  URL_ACCOUNT_DETAIL,
  URL_FANS_LIST,
  URL_WEIXIN_JSSKD_CONFIG_PARAMS
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
  static getRewardDetail(id, days = 7) {
    return Request(URL_REWARD_DETAIL, {id, days});
  }
  
  /**
   * 获取奖励列表
   * @param id {String|Number}
   * @param days {Number}
   * @returns {Promise}
   */
  static queryRewardList(id, days = 7) {
    return Request(URL_REWARD_LIST, {id, days});
  }
  
  /**
   * 获取帐户明细
   * @param id {String|Number}
   * @returns {Promise}
   */
  static getAccountDetail(id) {
    return Request(URL_ACCOUNT_DETAIL, {id});
  }
  
  /**
   * 获取粉丝列表
   * @param id {String|Number}
   * @returns {Promise}
   */
  static queryFansList(id) {
    return Request(URL_FANS_LIST, {id});
  }
  
  /**
   * 配置jssdk
   * @param url {String} 需要调用jssdk的页面url
   * @returns {Promise}
   */
  static configWeiXinJSSDK(url) {
    
    return new Promise((resolve, reject)=> {
      Request(URL_WEIXIN_JSSKD_CONFIG_PARAMS, {url})
        .then(resp=> {
          
          let {appId,timestamp,nonceStr,signature}=resp.data;
          
          try {
            wx.config({
              debug: true, // 开启调试模式,调用的所有api的返回值会在客户端alert出来，若要查看传入的参数，可以在pc端打开，参数信息会通过log打出，仅在pc端时才会打印。
              appId, // 必填，公众号的唯一标识
              timestamp, // 必填，生成签名的时间戳
              nonceStr, // 必填，生成签名的随机串
              signature,// 必填，签名，见附录1
              jsApiList: ['chooseWXPay'] // 必填，需要使用的JS接口列表，所有JS接口列表见附录2
            });
            
            wx.ready(res=>{
              resolve(res);
            });
            
            wx.error(res=>{
              reject(res);
            });
            
          } catch (e) {
            reject(e);
          }
          
        })
        .catch(err=>{
          reject(err);
        });
      
      
    });
  }
}
