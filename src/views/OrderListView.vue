<template lang="html">
  <div class="">
    <tab active-color="#222">
      <tab-item v-for="tab of tabList"
       :selected="tab.status===status"
       @click="status = tab.status">{{tab.text}}</tab-item>
    </tab>
    <div class="scroll-content has-header">
      <scroller :lock-x="true" height="100%" v-ref:scroller>
        <div class="padding-vertical">
          <order-item v-link="{name:'orderDetail',params:{id:00211}}"></order-item>
          <order-item></order-item>
          <order-item></order-item>
          <order-item></order-item>
          <order-item></order-item>
          <order-item></order-item>
          <order-item></order-item>
          <order-item></order-item>
        </div>
      </scroller>
    </div>
  </div>
</template>

<script>
import BaseView from './BaseView'
import {
  ORDER_STATUS_ALL,
  ORDER_STATUS_UNPAY,
  ORDER_STATUS_PROCESS,
  ORDER_STATUS_DELIVERED,
  ORDER_STATUS_FINISHED
} from '../const'
export default BaseView.extend({
  data: function () {
    return {
      status:ORDER_STATUS_ALL,
      tabList:[
        {status:ORDER_STATUS_ALL,text:'全部'},
        {status:ORDER_STATUS_UNPAY,text:'未付款'},
        {status:ORDER_STATUS_PROCESS,text:'处理中'},
        {status:ORDER_STATUS_DELIVERED,text:'已发货'},
        {status:ORDER_STATUS_FINISHED,text:'已完成'}
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

<style lang="css">
</style>
