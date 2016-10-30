<template lang="html">
  <div class="">
    <bar-header title="订单详情"></bar-header>
    <div class="scroll-content has-header">
      <scroller :lock-x="true" height="100%" v-ref:scroller>
        <div class="padding-bottom">
          <group title="订单信息">
            <cell title="订单编号">{{order.orderno}}</cell>
            <cell title="订单状态">{{order.statusStr}}</cell>
            <cell title="下单时间">{{order.ordertime}}</cell>
          </group>

          <group title="收货人信息">
            <consignee-info-item :consignee="order|consignee"></consignee-info-item>
            <div class="item">
              <h3 class="font-size-large">买家备注</h3>
              <p class="margin-top">
                {{order.remarks||'无'}}
              </p>
            </div>
            <div class="padding text-right" v-if="isUnpay">
              <button type="button" class="button" @click="cancelOrder">取消订单</button>
              <button type="button" class="button button-assertive margin-left" @click="pay">
                <strong>去付款</strong>
              </button>
            </div>
          </group>

          <group title="商品信息" class="margin-bottom">
            <product-item :mode="3" v-for="item of order.orderdList" :product="item"></product-item>
            <div class="item">
              <div class="dark">共{{productAmount}}件商品 运费：{{order.postmoney|price}}</div>
              <div class="dark text-right">
                实付：
                <span class="assertive">{{order.paidmoney}}</span>
              </div>
            </div>
          </group>

        </div>
      </scroller>
    </div>
  </div>
</template>

<script lang="babel">
  import BaseView from './BaseView'
  import Order from '../services/Order'
  import {ORDER_STATUS_UNPAY, ORDER_STATUS_PAID, ORDER_STATUS_CANCELED} from '../const'
  import User from "../services/User";

  export default BaseView.extend({
    data: function () {
      return {
        order: {}
      }
    },
    route: {
      data(){

        return Order.getById(this.$route.params.id)
                .then(resp=> {
                  this.$rerender();
                  this.$scrollTop();
                  return {order: resp.datalist}
                });
      },
      activate(){
        User.configWeiXinJSSDK(location.href)
                .then(resp=> {
                  console.log(resp);
                })
                .catch(err=> {
                  console.error(err);
                });
      }
    },
    computed: {
      isUnpay(){
        return this.order && this.order.status == ORDER_STATUS_UNPAY;
      },
      productAmount(){
        if (!this.order)return 0;

        if (!this.order.orderdList)return 0;

        return this.order.orderdList.reduce((num, item)=> {
          return num + Number(item.num);
        }, 0);
      },
    },
    filters: {
      consignee(order){
        return {
          name: order.recer,
          mobile: order.recerphone,
          province: order.addr_province,
          city: order.addr_city,
          area: order.addr_area,
          detail: order.addr_detail
        }
      }
    },
    methods: {
      cancelOrder(){
        let order = this.order;
        let orderid = order.orderid;
        Order.cancelById(orderid)
                .then(()=> {
                  this.$toast('取消订单成功');

                  order.status = ORDER_STATUS_CANCELED;
                  order.statusStr = '已取消';

                  this.$root.$broadcast('cancel-order-success', orderid);
                });
      },
      pay(){

        let {paidmoney, orderno}=this.order;

        Order.pay(paidmoney, orderno, this.$root.UID)
                .then(resp=> {
                  this.$alert('支付成功');
                  this.order.status = ORDER_STATUS_PAID;
                });
      }
    }
  });
</script>
