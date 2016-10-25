<template lang="html">
  <div class="order-item">
    <template v-if="order">
      <header class="order-item-header">
        <strong>订单号：<span v-text="order.orderno"></span></strong>
        <i class="icon icon-trash-o assertive"
          v-if="showRemoveButton"
          @click.stop="eventEmit('on-remove')"></i>
      </header>
      <div class="content">
        <product-item :mode="3" v-for="item of order.orderdList" :product="item"></product-item>
      </div>
      <footer class="order-item-footer">
        <div class="footer-item flex space-between">
          <span class="assertive" v-text="statusStr"></span>
          <div class="">
            共{{productAmount}}件 实付：
            <strong class="assertive" v-text="order.paidmoney|price"></strong>
          </div>
        </div>
        <div class="footer-item text-right flex ver-center right" v-if="isUnpay">
          <button type="button"
          @click.stop="eventEmit('on-cancel')"
          class="button button-small">取消订单</button>

          <button type="button"
          @click.stop="eventEmit('on-pay')"
          class="button button-small button-assertive margin-left">
            <strong>去付款</strong>
          </button>
        </div>
      </footer>
    </template>
  </div>
</template>

<script lang="babel">

import ProductItem from './ProductItem'
import Base from '../Base'
import {ORDER_STATUS_UNPAY,ORDER_STATUS_CANCELED,ORDER_STATUS_FINISHED} from '../const'

export default Base.extend({
  props:{
    order:{
      type:Object
    }
  },
  computed:{
    productAmount(){
      if(!this.order)return 0;

      if(!this.order.orderdList)return 0;
      
      return this.order.orderdList.reduce((num,item)=>{
        return num+Number(item.num);
      },0);
    },
    isUnpay(){

      return this.order&&this.order.status==ORDER_STATUS_UNPAY;
    },
    showRemoveButton(){
      if(!this.order)return;

      let status=this.order.status;
      return status==ORDER_STATUS_FINISHED||status==ORDER_STATUS_CANCELED;
    }
  },
  methods: {
    eventEmit(name){
      this.$emit(name,this.order);
    }
  },
  components: {
    ProductItem
  }
});
</script>

<style lang="scss">
@import "../scss/variables.scss";
@import "../scss/mixins";

$order-item-header-height:40px;
$order-item-footer-height:40px;

.order-item{
  width: 100%;
  margin-bottom: $content-padding;
  .order-item-header{
    padding-left: $content-padding;
    padding-right: $content-padding;
    height: $order-item-header-height;
    line-height: $order-item-header-height;
    color:$dark;
    background-color: $light;
    position: relative;
    &>.icon{
      @include clickable;
      font-size: 24px;
      position: absolute;
      right: $content-padding;
      top:8px;
    }
  }
  .order-item-footer{
    line-height: 1;
    color:$gray;

    .footer-item{
      @extend .order-item-header;
      border-bottom: 1px solid $stable;
    }
  }
  .item{

  }
}
</style>
