import _ from 'lodash'
import {
  URL_CONSIGNEE_CREATE,
  URL_CONSIGNEE_DEF,
  URL_CONSIGNEE_LIST,
  URL_CONSIGNEE_REMOVE,
  URL_CONSIGNEE_UPDATE
} from '../api'
var arr = [];
for (var i = 0; i < 10; i++) {
  arr.push({
    id: i * 1000 + 1,
    name: '洪培吉',
    address: '浙江省杭州市滨江区西兴街道官河锦庭2幢1单元1605',
    phone: 13856232145,
    active: false,
    selected: false
  });
}

arr[2].default = true;

export default class Consignee {
  constructor() {
    
  }
  
  static create() {
    
  }
  
  static updateById() {
    
  }
  
  static removeById(id) {
    var item = _.find(arr, {id: id});
    arr.$remove(item);
  }
  
  /**
   * TODO:get consignee list
   * 获取收货人列表
   * @static
   * @returns {Array}
   */
  static fetch() {
    
    return arr;
  }
  
  static getById(id) {

    return _.find(arr, {id: Number(id)});
  }
}