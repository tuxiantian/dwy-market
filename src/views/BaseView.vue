
<script lang="babel">

  import Base from '../Base'

  import * as actions from '../store/actions'

  import {
    ROUTE_SEARCH
  } from '../routes'

  import {reduce,filter,find,every} from 'lodash'

  import BarHeader from '../components/BarHeader'
  import ProductItem from '../components/ProductItem'
  import Panel from '../components/Panel'
  import CateItem from '../components/CateItem'
  import OrderItem from '../components/OrderItem'
  import ConsigneeInfoItem from '../components/ConsigneeInfoItem.vue'
  import ConsigneeForm from '../components/ConsigneeForm.vue'
  import FansItem from '../components/FansItem.vue'

  import {
    EVENT_PULLUP_RESET,
    EVENT_PULLUP_ENABLE,
    EVENT_PULLUP_DISABLE,
    CONSIGNEE_DEFAULT
  } from '../const'

  export default Base.extend({
    computed: {
      uuid() {
        return this.$refs.scroller.uuid;
      },
      totalPrice() {
        return reduce(this.selectedCartItems, (num, item) => {
          return num + item.num * item.price;
        }, 0);
      }
    },
    vuex: {
      actions,
      getters: {
        cartItems: state => state.cartItems,
        totalAmount(state) {
          return reduce(state.cartItems, (num, item)=> {
            return num + Number(item.num);
          }, 0);
        },
        isAllSelected(state) {
          return every(state.cartItems, item => {
            return item.selected;
          });
        },
        selectedCartItems(state) {
          return filter(state.cartItems, item => {
            return item.selected;
          });
        },
        consignees: state => state.consignees,
        defaultConsignee(state) {
          return find(state.consignees, {
            isDefault: CONSIGNEE_DEFAULT
          });
        },
        selectedConsignee(state){
          return find(state.consignees, {
            selected: true
          });
        }
      }
    },
    components: {
      BarHeader,
      ProductItem,
      Panel,
      CateItem,
      OrderItem,
      ConsigneeInfoItem,
      ConsigneeForm,
      FansItem
    },
    ready() {
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
       * @return {void}
       */
      $rerender(delay = 100) {
        if (!this.$refs.scroller) return;

        setTimeout(() => {
          this.$refs.scroller.reset();
        }, delay)
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
      $scrollTop(top = 0, duration = 0, delay = 200) {
        setTimeout(() => {
          this.$refs.scroller._xscroll.scrollTop(top, duration);
        }, delay);
      },
      $goBack() {
        window.history.back();
      },
      onHeaderBarTap() {
        this.$router.go({
          name: ROUTE_SEARCH
        });
      }
    }
  })
</script>
