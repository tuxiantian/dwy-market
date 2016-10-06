<template>
  <div>
    <bar-header title="创建订单"></bar-header>
    <div class="scroll-content has-header has-footer overflow-scroll">
      <!--<scroller :lock-x="true" height="100%" v-ref:scroller>-->
      <!---->
      <!--</scroller>-->
      <div>
        <div class="font-size-small assertive padding"> 为响应国家包裹实名制要求，请填写
          <strong class="font-size">真实姓名</strong>，否则可能无法送货 </div>
        <consignee-info-item :consignee="consignee"
          v-if="consignee"
         @click="showPopup=true"></consignee-info-item>

        <group v-if="!consignee">
          <cell title="还没有收货人，点击添加" :is-link="true"

          v-link="{name:'consigneeCreate'}"></cell>
        </group>

        <group title="商品信息">
          <product-item :mode="3"
            v-for="item of selectedCartItems"
            :product="item">
          </product-item>
          <cell title="运费">
            <span slot="after-title" class="font-size-small">(包邮)</span> {{freight|price}} </cell>
          <cell title="税费">
            <span slot="after-title" class="font-size-small">(包税)</span> {{tax|price}} </cell>
          <cell title="商品总价"> {{totalPrice|price}} </cell>
          <cell :title="selectedCartItems.length|productNumFormat"> 实付：
            <strong class="assertive" v-text="realPay|price"></strong>
          </cell>
          <x-textarea placeholder="请输入订单备注信息" :value.sync="remark"></x-textarea>
        </group>
        <!-- <group title="支付方式">
          <radio :options="payTypes" :value.sync="payType"></radio>
        </group> -->
      </div>
    </div>
    <div class="bar bar-footer">
      <h4 class="title">实付：
        <span class="assertive">{{realPay|price}}</span>
      </h4>
      <button class="button button-assertive" @click="onOrderButtonClick">提交订单</button>
    </div>
    
    <popup :show.sync="showPopup" height="100%">
      <div class="bar bar-header bar-dark">
        <button class="button button-icon back-button" @click.stop="showPopup=false">
            <i class="icon icon-angle-left"></i>
        </button>
        <h3 class="title">选择收货人</h3>
        <button class="button" v-link="{name:'consigneeCreate'}"
          @click="showPopup=false">添加收货人</button>
      </div>
      <div class="scroll-content has-header">
        <scroller :lock-x="true" height="100%" v-ref:scroll>
          <div class="">
            <consignee-info-item :consignee="item"
              v-for="item of consignees | orderBy 'receid' -1"
              @on-select="onSelect"
              :show-radio="true">
            </consignee-info-item>
          </div>
        </scroller>
      </div>
    </popup>
  </div>
</template>
<script>
  import BaseView from './BaseView.vue'
  import Order,{OrderProductItem} from  '../services/Order'
  export default BaseView.extend({
    data() {
      return {
        payType: '支付宝',
        payTypes: ['支付宝', '微信'],
        freight: 5,
        taxRatio: 0.03,
        remark:'',
        showPopup:false,
        consignee: {}
      }
    },
    route:{
      activate(){
        this.consignee=this.selectedConsignee;
      },
      data(transition){

        if(this.selectedCartItems.length===0){
          return location.replace('/');
        }

        transition.next();
      }
    },
    watch:{
      showPopup(val){
        if(val){
          this.$nextTick(()=>{
            this.$refs.scroll.reset();
          });
        }
      }
    },
    filters: {
      productNumFormat(val) {
        return `共${val}件商品`;
      }
    },
    computed: {
      tax() {
        //totalPrice定义在baseview
        return this.totalPrice * this.taxRatio;
      },
      realPay() {
        return this.totalPrice + this.tax + this.freight;
      }
    },
    methods: {
      onSelect(item) {

        this.consignees.forEach(consignee=>{
          consignee.selected=consignee===item;
        });

        this.consignee=item;
        this.showPopup=false;
      },
      onOrderButtonClick(){
        let orderProductItems=this.selectedCartItems.map(item=>{
          return new OrderProductItem(item.id,item.num);
        });
        
        let {UID}=this.$root;
        let {receid}=this.selectedConsignee;
        
        let order=new Order(UID,receid,orderProductItems,this.remark);

        order.save()
          .then((resp) =>{
            this.$toast('创建订单成功!');
            
            this.selectedCartItems.forEach(item=>{
              this.removeCartItem(item.cartid);
            });
            
            history.back();
          });
      }
    }
  });
</script>
<style lang="scss">

</style>
