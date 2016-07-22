import Vue from 'vue'

import {URL_USER_INFO} from '../api'
export default class User {
  constructor (){

  }
  static getInfo (){
    return Vue.http.post(URL_USER_INFO);
  }
}
