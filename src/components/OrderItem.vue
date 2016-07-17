<template lang="html">
  <div class="order-item">
    <header class="order-item-header">
      <strong>订单号：<span>625412874554</span></strong>
    </header>
    <div class="item item-thumbnail-left">
      <img :src="p2" alt="" />
      <h3>日本进口充气娃娃</h3>
      <p class="assertive">￥750.00</p>
      <p>
        x2
      </p>
    </div>
    <footer class="order-item-footer">
      <span class="assertive">待付款</span>
      <!-- <div class="">
        共2件 实付：
        <strong class="assertive">￥1500.00</strong>
      </div> -->
      <div class="">
        <button type="button" class="button button-small">取消订单</button>
        <button type="button" class="button button-small button-dark margin-left">
          <strong>去付款</strong>
        </button>
      </div>
    </footer>
  </div>
</template>

<script>
import p2 from '../assets/p2.jpg'
export default {
  data: function () {
    return {
      p2:p2
    }
  },
  computed: {},
  ready: function () {},
  attached: function () {},
  methods: {},
  components: {}
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
    @extend .order-item-header;
    @include display-flex();
    @include justify-content(space-between);
    @include align-items(center);
    line-height: 1;
    color:$gray;
  }
  .item{

  }
}
</style>
