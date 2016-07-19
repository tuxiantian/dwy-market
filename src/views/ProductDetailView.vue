<template lang="html">
  <div class="">
    <bar-header title="商品详情"></bar-header>
    <div class="scroll-content has-header has-footer">
      <scroller :lock-x="true" height="100%" v-ref:scroller>
        <div class="">
          <swiper height="200px" :list="slides"></swiper>
          <div class="item">
            <h3 class="padding-bottom">日本进口充气娃娃</h3>
            <div class="">
              <strong class="font-size-large dark">￥750.00</strong>
              <strike class="font-size-small">1000.00</strike>
            </div>
            <div class="item-content font-size">
              <span class="pull-left">包邮(偏远6省除外)</span>
              <span class="pull-right">7日销量:100</span>
            </div>
          </div>
          <div class="margin-vertical content">
            <img v-for="item of slides" :src="item.img" alt="" />
          </div>
        </div>
      </scroller>
    </div>
    <footer class="bar bar-footer">
      <i class="icon icon-shopping-cart"></i>
      <span class="badge badge-assertive">0</span>
      <h1 class="title">￥750.00</h1>
      <button type="button" class="button button-assertive">加入购物车</button>
    </footer>
  </div>
</template>

<script>
import BaseView from './BaseView'
import p2 from '../assets/p2.jpg'
import p1 from '../assets/p1.jpg'

export default BaseView.extend({
  data: function () {
    return {
      slides:[
        {img:p1},
        {img:p2}
      ]
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
  @import "../scss/variables";
  @import "../scss/mixins";
  .content{
    img{
      width: 100%;
    }
  }
  .item-content{
    @include display-flex();
    @include justify-content(space-between);
  }
  .bar.bar-footer{
    padding: 0;
    padding-left:$content-padding;
    .icon{
      font-size: 32px;
      color:$dark;
    }

    .badge{
      margin-left: -$content-padding*3/2;
      margin-top:-$content-padding/2;
      font-size: 10px;
      padding: 1px 7px;
    }

    // .button{
    //   position: absolute;
    //   right: 0;
    //   height: 100%;
    //   border-radius: 0;
    // }
  }
</style>
