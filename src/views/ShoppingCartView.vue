<template lang="html">
  <div class="">
    <div class="scroll-content has-footer">
      <scroller :lock-x=true height="100%" v-ref:scroller>
        <div class="">
          <product-item mode="cart"></product-item>
          <product-item mode="cart"></product-item>

          <product-item mode="cart"></product-item>

        </div>
      </scroller>
    </div>
    <footer class="bar bar-footer bar-button-right">
      <label class="checkbox checkbox-dark checkbox-small">
        <input type="checkbox" value="">
      </label>
      <span >全选</span>
      <div class="content text-right" style="width:100%;">
        <div>
          <strong>合计:
            <span class="assertive">￥2100.00</span>
          </strong>
        </div>
        <div class="font-size-small">不含运费</div>
      </div>
      <button type="button pull-right button-full" class="button button-assertive">立即结算</button>
    </footer>
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
})
</script>

<style lang="scss">
@import "../scss/variables.scss";
@import "../scss/mixins";
  .bar.bar-footer{
    @include align-items(center);

    .content{
      padding-top: $content-padding/2;
      position: absolute;
      top:0;
      right: $content-padding*8;
    }

    &.bar-button-right{
      .button{
        position: absolute;
        right: 0;
        top:1px;
        height: 100%;
        border-radius: 0;
      }
    }
  }
</style>
