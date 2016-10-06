<template lang="html">

<div class="">
    <bar-header :mode="headerType"
    :show-back="false"
    :show-cancel="false"
    v-touch:tap="onHeaderBarTap"></bar-header>
    <div class="scroll-content has-header">
        <scroller :lock-x="true" height="100%" v-ref:scroller>
          <div>
            <swiper height="200px" :list="slides"></swiper>
            <div class="list margin-top">
              <product-item :mode="productMode"
                v-link="{name:'productDetail',params:{id:product.id}}"
                :product="product"
                v-for="product of products"></product-item>
            </div>
          </div>
        </scroller>
    </div>
</div>

</template>

<script type="text/javascript">

import BaseView from './BaseView.vue'

import {MODE_HEADER_SEARCH,MODE_PRODUCT_REC} from '../const'
import {ROUTE_SEARCH} from '../routes'

import Product from '../services/Product'

import p2 from '../assets/p2.jpg'
import p1 from '../assets/p1.jpg'

export default BaseView.extend({
  data() {
    return {
      headerType: MODE_HEADER_SEARCH,
      products:[],
      productMode:MODE_PRODUCT_REC,
      slides:[
        {img:p1},
        {img:p2}
      ]
    }
  },
  ready(){
    this.queryRecommend();
    this.getBanner();
  },
  methods:{
    getBanner(){
      Product.getBanner()
        .then(resp=>{
          this.slides=resp.datalist;
          this.slides.forEach(item=>{
            item.img=item.imgurl;
          });
        });
    },
    queryRecommend(){
      Product.fetchRecommend()
        .then(resp=>{
          this.products=resp.datalist;
          this.$rerender();
        });
    }
  }
});

</script>
