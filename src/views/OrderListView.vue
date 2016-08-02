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
          <template v-if="orders.length>0">
            <order-item
              v-for="item of orders"
              track-by="orderid"
              :order="item"
              @on-cancel="cancelOrder"
              @on-remove="removeOrder"
              v-link="{name:'orderDetail',params:{id:item.orderid}}">

            </order-item>
          </template>

        </div>
      </scroller>
    </div>
  </div>
</template>

<script>
import BaseView from './BaseView'
import {
  ORDER_STATUS_CANCELED,
  ORDER_STATUS_UNPAY,
  ORDER_STATUS_PROCESS,
  ORDER_STATUS_DELIVERED,
  ORDER_STATUS_FINISHED,
  ORDER_STATUS_PAYED
} from '../const'

import Order, { OrderProductItem } from '../services/Order';

import {find} from 'lodash'

export default BaseView.extend({
  data: function () {
    return {
      status:'',
      tabList:[
        {status:ORDER_STATUS_UNPAY,text:'未付款'},
        {status:ORDER_STATUS_PAYED,text:'已付款'},
        {status:ORDER_STATUS_PROCESS,text:'处理中'},
        {status:ORDER_STATUS_DELIVERED,text:'已发货'},
        {status:ORDER_STATUS_FINISHED,text:'已完成'},
        {status:ORDER_STATUS_CANCELED,text:'已取消'}

      ],
      orders:[]
    }
  },
  ready(){
    this.status=ORDER_STATUS_UNPAY;
    this.$on('cancel-order-success',function(orderid){
      let order=find(this.orders,{orderid});
      this.orders.$remove(order);
    });
  },
  watch:{
    status(){
      this.fetchOrders();
    }
  },
  methods:{
    fetchOrders(){
      Order.fetchByStatus(this.$root.UID,this.status)
        .then(resp=>{
          this.orders=resp.datalist;
          this.$rerender();
          this.$scrollTop();
        });
    },
    cancelOrder(order){
      Order.cancelById(order.orderid)
        .then(()=>{
          this.orders.$remove(order);
          this.$toast('取消订单成功');
        });
    },
    removeOrder(order){
      Order.removeById(order.orderid)
        .then(()=>{
          this.orders.$remove(order);
          this.$toast('删除订单成功');
        });
    },
    pay(){
      this.$toast('pay order');
    }
  }
});
</script>

<style lang="css">
</style>
