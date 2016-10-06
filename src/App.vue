<template>
  <div class="view-container">
    <router-view class="view" keep-alive transition="fade"></router-view>
    <loading :show="showLoading" text="加载中..."></loading>
    <toast :show.sync="toastConfig.show"
           width="9.6em"
           :type="toastConfig.type">
      {{toastConfig.content}}
    </toast>

    <alert :show.sync="alertConfig.show"
           :button-text="alertConfig.buttonText"
           :title="alertConfig.title"
           @on-show="alertConfig.onShow"
           @on-hide="alertConfig.onHide">
      {{{alertConfig.content}}}
    </alert>

    <confirm :show.sync="confirmConfig.show"
             :cancel-text="confirmConfig.cancelText"
             :confirm-text="confirmConfig.confirmText"
             @on-confirm="confirmConfig.onConfirm"
             @on-cancel="confirmConfig.onCancel"
             :title="confirmConfig.title">
      {{{confirmConfig.content}}}
    </confirm>
  </div>
</template>

<script>
  import store from './store'
  import Loading from 'vux/src/components/loading'
  import Toast from 'vux/src/components/toast'
  import Alert from 'vux/src/components/alert'
  import Confirm from 'vux/src/components/confirm'
  import Vue from 'vue'
  import {isString,isObject} from 'lodash'
  import {
    API_SERVER,
    API_PATH,
    TOAST_CONFIG,
    ALERT_CONFIG,
    CONFIRM_CONFIG,
    DEF_USER
  } from './app.config'

  export default {
    data(){
      return {
        reqCount:0,
        showLoading:false,
        toastConfig: TOAST_CONFIG,
        alertConfig: ALERT_CONFIG,
        confirmConfig: CONFIRM_CONFIG,
        UID:DEF_USER
      }
    },
    store,
    created(){
      Vue.http.interceptors.push((req, next) => {

        req.url=`${API_SERVER}${API_PATH}${req.url}`;

        this.reqCount++;

        if (this.reqCount <= 1) {
          this.showLoading = true;
        }

        next((response) => {

          this.reqCount--;

          if (this.reqCount === 0) {
            setTimeout( () =>{
              this.showLoading = false;
            }, 100);
          }

          if(response.data.respCode==0){
            this._alert(response.data.respMsg||'请求失败');
          }
        });
      });
    },
    components:{
      Loading,
      Toast,
      Alert,
      Confirm
    },

    methods:{
      _toast(option){
        this.toastConfig = this.handleParam(TOAST_CONFIG, option);
        this.toastConfig.show = true;
      },
      _alert(option){
        this.alertConfig = this.handleParam(ALERT_CONFIG, option);
        this.alertConfig.show = true;
      },
      _confirm(option){
        this.confirmConfig = this.handleParam(CONFIRM_CONFIG, option);
        this.confirmConfig.show = true;
      },
      handleParam(defaults, option){

        if (isString(option)) {
          var content = option;
          option = Object.assign({}, defaults);
          option.content = content;
        } else if (isObject(option)) {
          option = Object.assign({}, defaults, option);
        }
        return option;
      }
    }
  }

</script>

<style lang="scss">
  @import "scss/style.scss";
  @import "scss/icon.css";

  .weui_cell p{
    margin:0;
  }
  .weui_cell_primary{
    p{
      color: $dark;
    }
  }
  .checkbox.checkbox-small{
    &>input[type="checkbox"]{
      width: 24px;
      height: 24px;
    }
  }

  .vux-slider > .vux-swiper > .vux-swiper-item > a > .vux-swiper-desc {
    margin:0;
    background:rgba(0,0,0,0.5);
    height: auto !important;
    background-image: none !important;
  }

  .flex{
    @include display-flex();

    &.center{
      @include justify-content(center);
      @include align-items(center);
    }
    &.ver-center{
      @include align-items(center);
    }

    &.hor-center{
      @include justify-content(center);
    }

    &.space-between{
      @include justify-content(space-between);
    }

    &.right{
      @include justify-content(flex-end);
    }

    &.wrap{
      @include flex-wrap(wrap);
    }
  }
</style>
