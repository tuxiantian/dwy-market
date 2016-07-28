<template lang="html">
  <div class="">
    <bar-header title="商品详情"></bar-header>
    <div class="scroll-content has-header has-footer">
      <scroller :lock-x="true" height="100%" v-ref:scroller>
        <div class="">
          <swiper height="200px" :list="product.imgurls"></swiper>
          <div class="item">
            <h3 class="padding-bottom" v-text="product.name"></h3>
            <div class="">
              <strong class="font-size-large dark" v-text="product.price|price"></strong>
              <strike class="font-size-small" v-text="product.oldprice|price"></strike>
            </div>
            <div class="item-content font-size">
              <span class="pull-left" v-text="product.isPost|status2text"></span>
              <span class="pull-right">7日销量:{{product.sales}}</span>
            </div>
          </div>
          <div class="margin-top padding light-bg" v-html="product.detail">

          </div>
          <div class="margin-vertical content">
            <img v-for="item of product.imgurls" v-image-height="imgFullWidth" :src="item.img" alt="" />
          </div>
        </div>
      </scroller>
    </div>
    <footer class="bar bar-footer">
      <i class="icon icon-shopping-cart" @click"goShoppingCart"></i>
      <span class="badge badge-assertive"
        v-text="totalAmount"
        @click="goShoppingCart"></span>
      <h1 class="title" v-text="product.price|price"></h1>
      <button type="button"
        @click="insertOrUpdate({productId:product.id,uid:$root.UID})"
              class="button button-assertive">加入购物车</button>
    </footer>
  </div>
</template>

<script>
import BaseView from './BaseView'
import Product from '../services/Product'
import _ from 'lodash'
import p2 from '../assets/p2.jpg'
import p1 from '../assets/p1.jpg'

export default BaseView.extend({
  data: function () {
    return {
      productId:null,
      product:{},
      slides:[
        {img:p1},
        {img:p2}
      ]
    }
  },
  route:{
    data(transition){
      transition.next({productId:this.$route.params.id})
    }
  },
  filters:{
    status2text(isPost){
      return isPost==1?'包邮':'不包邮';
    }
  },
  watch:{
    productId(val){
      if(!val)return;
      this.getProductDetail();
    }
  },
  methods: {
    getProductDetail(){
      Product.getById(this.productId)
        .then(resp=>{
          _.forEach(resp.datalist.imgurls,item=>{
            item.img=item.imgurl;
          });

          this.product=resp.datalist
          this.$rerender();
          this.$scrollTop();
        });
    },
    goShoppingCart(){
      this.$router.go({
        name:'shoppingCart',
        replace:true
      })
    }
  },
  components: {}
});
</script>

<style lang="scss" scoped>
  @import "../scss/variables";
  @import "../scss/mixins";
  .content{
    img{
      width: 100%;
    }
  }
  .item-content{
    @include display-flex();
    @include justify-content(space-between);
  }
  .bar.bar-footer{
    padding: 0;
    padding-left:$content-padding;
    .icon{
      font-size: 32px;
      color:$dark;
    }

    .badge{
      margin-left: -$content-padding*3/2;
      margin-top:-$content-padding/2;
      font-size: 10px;
      padding: 1px 7px;
    }

    // .button{
    //   position: absolute;
    //   right: 0;
    //   height: 100%;
    //   border-radius: 0;
    // }
  }
</style>
