<template lang="html">
  <div class="">
    <bar-header title="订单详情"></bar-header>
    <div class="scroll-content has-header">
      <scroller :lock-x="true" height="100%" v-ref:scroller>
        <div class="padding-bottom">
          <group title="订单信息">
            <cell title="订单编号">01245125445</cell>
            <cell title="订单状态">已关闭</cell>
            <cell title="下单时间">2016-06-16 15:25:35</cell>
          </group>

          <group title="收货人信息">
            <consignee-info-item :consignee="consignee"></consignee-info-item>
            <div class="item">
              <h3 class="font-size-large">买家备注</h3>
              <p class="margin-top">
                浙江省杭州市滨江区西兴街道官河锦庭2幢1单元1605
              </p>
            </div>
            <div class="padding text-right">
              <button type="button"  class="button">取消订单</button>
              <button type="button"  class="button button-assertive margin-left">
                <strong>去付款</strong>
              </button>
            </div>
          </group>

          <group title="商品信息" class="margin-bottom">
            <product-item :mode="3"></product-item>
            <div class="item">
              <div class="dark">共1件商品 运费：￥0.00 优惠：￥0.00</div>
              <div class="dark text-right">
                实付：
                <span class="assertive">￥750.00</span>
              </div>
            </div>
          </group>

        </div>
      </scroller>
    </div>
  </div>
</template>

<script>
import BaseView from './BaseView'
export default BaseView.extend({
  data: function () {
    return {
      consignee:{
        name:'洪培吉',
        address:'浙江省杭州市滨江区西兴街道官河锦庭2幢1单元1605',
        mobile:13856232145
      }
    }
  },
  computed: {},
  ready: function () {},
  attached: function () {},
  methods: {},
  components: {}
});
</script>
