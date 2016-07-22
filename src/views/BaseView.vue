<template lang="html">


</template>

<script type="text/javascript">

  import Vue from 'vue'

  import Scroller from 'vux/src/components/scroller'
  import Group from 'vux/src/components/group'
  import Cell from 'vux/src/components/cell'
  import XNumber from 'vux/src/components/x-number'
  import XTextarea from 'vux/src/components/x-textarea'
  import Swiper from 'vux/src/components/swiper'
  import SwiperItem from 'vux/src/components/swiper-item'
  import {Tab, TabItem} from 'vux/src/components/tab'


  import BarHeader from '../components/BarHeader'
  import ProductItem from '../components/ProductItem'
  import Panel from '../components/Panel'
  import CateItem from '../components/CateItem'
  import OrderItem from '../components/OrderItem'

  import _ from 'lodash'

  import {
          EVENT_PULLUP_RESET, EVENT_PULLUP_ENABLE, EVENT_PULLUP_DISABLE
  }
          from '../const'

  export default Vue.extend({
    computed: {
      uuid() {
        return this.$refs.scroller.uuid;
      }
    },
    components: {
      Scroller,
      Group,
      Cell,
      XNumber,
      Swiper,
      SwiperItem,
      XTextarea,
      Tab,
      TabItem,
      BarHeader,
      ProductItem,
      Panel,
      CateItem,
      OrderItem
    },
    ready(){
      this.$rerender();
    },
    methods: {
      $toast(option) {
        this.$root._toast(option);
      },

      $alert(option) {
        this.$root._alert(option);
      },

      $confirm(option) {
        this.$root._confirm(option);
      },
      /**
       * 重新渲染Scroller
       * @return {Void}
       */
      $rerender(delay=100) {
        setTimeout(() = > {
          this.$refs.scroller.reset();
      },
        delay
      )
        ;
      },

      /**
       * 重置上拉插件
       */
      $resetPullup() {
        this.$broadcast(EVENT_PULLUP_RESET, this.uuid);
      },

      /**
       * 禁用上拉插件
       * @return {void}
       */
      $disablePullup() {
        this.$broadcast(EVENT_PULLUP_DISABLE, this.uuid);
      },

      /**
       * 启用上拉插件
       * @return {void}
       */
      $enablePullup() {
        this.$broadcast(EVENT_PULLUP_ENABLE, this.uuid);
      },

      /**
       * Scroller滚动到指定高度
       * @param  {Number} top      =             0   高度
       * @param  {Number} duration =             200 动画持续时间
       * @param  {Number} delay    =             100 延迟触发
       * @return {void}
       */
      $scrollTo(top = 0, duration = 200, delay = 100) {
        setTimeout(() = > {
          this.$refs.scroller._xscroll.scrollTo(top, duration);
      },
        delay
      )
        ;
      }
    }
  })

</script>
<style lang="scss">
  .vux-slider > .vux-swiper > .vux-swiper-item > a > .vux-swiper-desc {
    display: none;
  }
</style>
