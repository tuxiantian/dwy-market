<template lang="html">
  <div class="">
    <bar-header title="可提现金额"></bar-header>
    <div class="scroll-content has-header">
      <scroller :lock-x="true" height="100%" v-ref:scroller>


        <div class="">
          <div class="item item-button-right">
            <p>
              可提现金额
            </p>
            <h1>{{balance|price}}</h1>
            <!--提现功能暂时不做，待定,2016.10.25-->
            <!--<button type="button" class="button button-assertive">提现</button>-->
          </div>
          <group>
            <cell v-for="item of infoItems" :title="item.title">{{item.desc}}</cell>
          </group>

          <div class="margin-top">
            <div class="bar bar-tab">
              <tab active-color="#222">
                <tab-item v-for="item of days"
                          :selected="item===day"
                          @click="day = item">最近{{item}}天
                </tab-item>
              </tab>
            </div>
          </div>
        </div>
      </scroller>
    </div>
  </div>

</template>

<script lang="babel">
  import BaseView from './BaseView'
  import InfoItem from '../components/InfoItem'
  import User from '../services/User'

  export default BaseView.extend({
    data () {
      return {
        infoItems: {
          curMonth: {title: '本月奖励', desc: '0.00'},
          total: {title: '累计奖励', desc: '0.00'},
          frozen: {title: '冻结奖励', desc: '0.00'}
        },
        balance:0,
        day: 7,
        days: [7, 30]
      }
    },
    route: {
      data(){
        this.getAccountInfo();
      }
    },
    watch: {
      day(){

      }
    },
    methods: {
      getAccountInfo(){
        User.getAccountDetail(this.$root.UID)
        .then(resp=> {
          let {data}=resp;
          let {infoItems}=this;

          this.balance=data.balance;
          infoItems.total.desc=data.allreward;
          infoItems.frozen.desc=data.frozenreward;
          infoItems.curMonth.desc=data.monthreward;
        });
      }
    },
    components: {
      InfoItem
    }
  })
</script>

<style lang="scss" scoped>

  .bar-tab {
    display: block;
    padding: 0;
  }

  .item-button-right {
    .button {
      top: 40px;
    }
  }
</style>
