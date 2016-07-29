<template lang="html">
  <div class="order-item">
    <header class="order-item-header">
      <strong>订单号：<span>625412874554</span></strong>
    </header>
    <div class="content">
      <product-item :mode="3"></product-item>
      <product-item :mode="3"></product-item>
    </div>
    <footer class="order-item-footer">
      <div class="footer-item flex space-between">
        <span class="assertive">待付款</span>
        <div class="">
          共2件 实付：
          <strong class="assertive">￥1500.00</strong>
        </div>
      </div>
      <div class="footer-item text-right flex ver-center right">
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
  </div>
</template>

<script>

import ProductItem from './ProductItem'
export default {
  data: function () {
    return {

    }
  },
  props:{
    order:{
      type:Object,
      default(){
        return {};
      }
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
}
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
