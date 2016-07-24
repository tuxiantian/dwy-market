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
          <tab-item>最近7天</tab-item>
          <tab-item>最近30天</tab-item>
        </tab>
      </div>
      <div class="scroll-content has-header">
        <scroller :lock-x="true" height="100%" v-ref:scroller>
          <div class="">
            <div class="flex wrap light-bg">
              <info-item v-for="item of infoItems" :title="item.title" :desc="item.desc"></info-item>
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

<script>
import BaseView from './BaseView'
import InfoItem from '../components/InfoItem'

export default BaseView.extend({
  data: function () {
    return {
      infoItems:[
        {title:'代言奖励',desc:'0.00'},
        {title:'新增粉丝',desc:'0'},
        {title:'粉丝订单',desc:'0'},
        {title:'粉丝销量',desc:'0.00'},
      ]
    }
  },
  computed: {},
  ready: function () {},
  attached: function () {},
  methods: {},
  components: {
    InfoItem
  }
})
</script>

<style lang="scss" scoped>

  .tab-header{
    display: block;
    padding:0;
  }
  .bar-subheader{
    font-size: 12px;
    border-bottom:1px solid #eaeaea;
    padding-right:100px;
    line-height: 1.4;
    .badge:last-child{
      position:absolute;
      top:10px;
      right:10px;
    }
  }
</style>
