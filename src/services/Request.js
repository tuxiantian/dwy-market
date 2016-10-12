import Vue from 'vue'

const RESPONSE_STATUS_ERROR=0;

/**
 * 发送请求
 * @param url {String}
 * @param [params] {Object}
 * @param [method] {String}
 * @returns {Promise}
 * @constructor
 */
export default function Request (url,params,method='post') {
  return new Promise(function (resolve, reject) {
    Vue.http[method](url, params)
      .then(resp => {
        
        try {
          let {data} = resp;
          let {respCode}=data;
  
          if (respCode == RESPONSE_STATUS_ERROR) {
            return reject(resp);
          }
  
          resolve(data);
        }catch (e){
          
          reject(e);
        }
        
      })
      .catch(err => {
        reject(err);
      });
  });
}
