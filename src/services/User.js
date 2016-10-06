import {URL_USER_INFO} from '../api'
import Request from '../services/Request'

export default class User {
  constructor (){

  }
  
  static getInfo (){
    return Request(URL_USER_INFO);
  }
}
