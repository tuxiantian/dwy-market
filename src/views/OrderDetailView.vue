<template lang="html">
  <div class="">
    <bar-header title="订单详情"></bar-header>
    <div class="scroll-content has-header">
      <scroller :lock-x="true" height="100%" v-ref:scroller>
        <div class="">
          <group>
            <cell title="订单编号">01245125445</cell>
            <cell title="订单状态">已关闭</cell>
            <cell title="下单时间">2016-06-16 15:25:35</cell>
          </group>

          <group>
            <div class="item item-button-right">
              <h3 class="font-size-large">收货人：洪培吉</h3>
              <p class="margin-top" style="white-space: normal;">
                浙江省杭州市滨江区西兴街道官河锦庭2幢1单元1605
              </p>
              <button class="button button-small button-icon font-size-secondary">13856232145</button>
            </div>
            <div class="item">
              <h3 class="font-size-large">买家备注</h3>
              <p class="margin-top">
                浙江省杭州市滨江区西兴街道官河锦庭2幢1单元1605
              </p>
            </div>
          </group>

          <group title="商品信息" class="margin-bottom">
            <div class="item item-thumbnail-left">
              <img src="../assets/p1.jpg" alt="" />
              <h3>日本进口充气娃娃</h3>
              <p class="assertive">￥750.00</p>
              <p>
                x2
              </p>
            </div>
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
    }
  },
  computed: {},
  ready: function () {},
  attached: function () {},
  methods: {},
  components: {}
});
</script>

<style lang="scss" scoped>
  .font-size-large{
    font-size: 17px !important;
  }
</style>
