<template>
  <div>
    <bar-header title="创建订单"></bar-header>
    <div class="scroll-content has-header has-footer overflow-scroll">
      <!--<scroller :lock-x="true" height="100%" v-ref:scroller>-->
      <!---->
      <!--</scroller>-->
      <div>
        <div class="font-size-small assertive padding"> 为响应国家包裹实名制要求，请填写
          <strong class="font-size">真实姓名</strong>，否则可能无法送货 </div>
        <consignee-info-item :consignee="consignee"></consignee-info-item>
        <group title="商品信息">
          <product-item :mode="3" v-for="item of selectedCartItems" :product="item"></product-item>
          <cell title="运费">
            <span slot="after-title" class="font-size-small">(包邮)</span> {{freight|price}} </cell>
          <cell title="税费">
            <span slot="after-title" class="font-size-small">(包税)</span> {{tax|price}} </cell>
          <cell title="商品总价"> {{totalPrice|price}} </cell>
          <cell :title="selectedCartItems.length|productNumFormat"> 实付：
            <strong class="assertive" v-text="realPay|price"></strong>
          </cell>
          <x-textarea placeholder="请输入订单备注信息"></x-textarea>
        </group>
        <group title="支付方式">
          <radio :options="payTypes" :value.sync="payType"></radio>
        </group>
      </div>
    </div>
    <div class="bar bar-footer">
      <h4 class="title">实付：
        <span class="assertive">{{realPay|price}}</span>
      </h4>
      <button class="button button-assertive">提交订单</button>
    </div>
  </div>
</template>
<script>
  import BaseView from './BaseView.vue'
  export default BaseView.extend({
    data() {
      return {
        payType: '支付宝',
        payTypes: ['支付宝', '微信'],
        freight: 5,
        taxRatio: 0.03,
        consignee: {
          name: '洪培吉',
          address: '浙江省杭州市滨江区西兴街道官河锦庭2幢1单元1605',
          phone: 13856232145
        }
      }
    },
    filters: {
      productNumFormat(val) {
        return `共${val}件商品`;
      }
    },
    computed: {
      tax() {
        return this.totalPrice * this.taxRatio;
      },
      realPay() {
        return this.totalPrice + this.tax + this.freight;
      }
    },
    methods: {
      someFn() {}
    }
  });
</script>
<style lang="scss">

</style>