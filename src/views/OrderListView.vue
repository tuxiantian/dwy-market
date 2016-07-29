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
          <order-item
            v-for="item of orders"
            v-link="{name:'orderDetail',params:{id:item.id}}">

          </order-item>
          <order-item @on-cancel="cancelOrder" @on-pay="pay" v-link="{name:'orderDetail',params:{id:1000}}"></order-item>
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

import Order, { OrderProductItem } from '../services/Order';

export default BaseView.extend({
  data: function () {
    return {
      status:null,
      tabList:[
        {status:ORDER_STATUS_ALL,text:'全部'},
        {status:ORDER_STATUS_UNPAY,text:'未付款'},
        {status:ORDER_STATUS_PROCESS,text:'处理中'},
        {status:ORDER_STATUS_DELIVERED,text:'已发货'},
        {status:ORDER_STATUS_FINISHED,text:'已完成'}
      ],
      orders:[]
    }
  },
  ready(){
    this.status=ORDER_STATUS_ALL;
  },
  watch:{
    status(){
      this.fetchOrders();
    }
  },
  methods:{
    fetchOrders(){
      Order.fetchByStatus(this.status)
        .then(resp=>{
          this.orders=resp.datalist;
        });
    },
    cancelOrder(){
      Order.cancelById(111);
      this.$toast('cancel order');
    },
    pay(){
      this.$toast('pay order');
    }
  }
});
</script>

<style lang="css">
</style>
