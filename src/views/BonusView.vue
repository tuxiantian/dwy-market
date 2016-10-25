<template lang="html">
  <div class="">
    <bar-header title="粉丝销量"></bar-header>
    <div class="bar bar-subheader padding-left">
      成为代言人，你的粉丝下单购买后，您就可以获得奖励哦
      <span class="badge badge-dark">查看详情</span>
    </div>
    <div class="scroll-content has-subheader">
      <div class="bar bar-header  tab-header">
        <tab active-color="#222">
          <tab-item v-for="day of dayList"
                    :selected="days===day"
                    @click="days = day">最近{{day}}天</tab-item>
        </tab>
      </div>
      <div class="scroll-content has-header">
        <scroller :lock-x="true" height="100%" v-ref:scroller>
          <div class="">
            <div class="flex wrap light-bg">
              <info-item v-for="item of infoItems" :title="item.title" :desc="item.desc|toString">

              </info-item>
            </div>
            <div class="margin-top light-bg padding">
              <h6>下单粉丝</h6>
            </div>
          </div>
        </scroller>
      </div>
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
        days:7,
        dayList:[7,30],
        infoItems: {
          reward: {title: '代言奖励', desc: '0.00'},
          newFans: {title: '新增粉丝', desc: '0'},
          fansOrder: {title: '粉丝订单', desc: '0'},
          fansMoney: {title: '粉丝销量', desc: '0.00'},
        }
      }
    },
    route: {
      data(){
        this.getRewardDetail();
      }
    },
    watch:{
      days(){
        this.getRewardDetail();
      }
    },
    methods: {
      getAccountDetail(){
        return User.getRewardDetail(this.$root.UID,this.days)
          .then(resp=> {
            let {data}=resp;
            let {infoItems}=this;

            infoItems.reward.desc=data.reward;
            infoItems.newFans.desc=data.fans;
            infoItems.fansOrder.desc=data.fansorder;
            infoItems.fansMoney.desc=data.fansmoney;

          });
      }
    },
    components: {
      InfoItem
    }
  })
</script>

<style lang="scss" scoped>

  .tab-header {
    display: block;
    padding: 0;
  }

  .bar-subheader {
    font-size: 12px;
    border-bottom: 1px solid #eaeaea;
    padding-right: 100px;
    line-height: 1.4;
    .badge:last-child {
      position: absolute;
      top: 10px;
      right: 10px;
    }
  }
</style>
