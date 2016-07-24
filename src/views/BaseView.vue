<template lang="html">


</template>

<script type="text/javascript">

  import Base from '../Base'
  import * as actions from '../store/actions'
  import {ROUTE_SEARCH} from '../routes'

  import _ from 'lodash'

  import BarHeader from '../components/BarHeader'
  import ProductItem from '../components/ProductItem'
  import Panel from '../components/Panel'
  import CateItem from '../components/CateItem'
  import OrderItem from '../components/OrderItem'

  import {
          EVENT_PULLUP_RESET,
          EVENT_PULLUP_ENABLE,
          EVENT_PULLUP_DISABLE
  }from '../const'

  export default Base.extend({
    computed: {
      uuid() {
        return this.$refs.scroller.uuid;
      }
    },
    vuex:{
      actions,
      getters:{
        cartItems:store=>store.cartItems,
        totalAmount(store){
          return _.reduce(store.cartItems,(num,item)=>{
            return num+Number(item.num);
          },0);
        }
      }
    },

    components: {
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
        setTimeout(()=>{
          this.$refs.scroller.reset();
        },delay);
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
      $scrollTop(top = 0, duration = 0, delay = 200) {
        setTimeout(()=>{
          this.$refs.scroller._xscroll.scrollTop(top, duration);
        },delay)
      },
      $goBack(){
        window.history.back();
      },
      onHeaderBarTap(){
        this.$router.go({name:ROUTE_SEARCH});
      }
    }
  })

</script>
<style lang="scss">
  .vux-slider > .vux-swiper > .vux-swiper-item > a > .vux-swiper-desc {
    display: none;
  }
</style>
