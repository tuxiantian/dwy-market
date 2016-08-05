<template lang="html">

<div class="">
    <bar-header :mode="headerType"
    :show-back="false"
    :show-cancel="false"
    v-touch:tap="onHeaderBarTap"></bar-header>
    <div class="scroll-content has-header">
        <scroller :lock-x="true" height="100%" v-ref:scroller>
          <div>
            <swiper height="200px" :list="slides" :auto="true"></swiper>
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
import {URL_SLIDE_LIST} from '../api'
import Product from '../services/Product'

export default BaseView.extend({
  data() {
    return {
      headerType: MODE_HEADER_SEARCH,
      products:[],
      productMode:MODE_PRODUCT_REC,
      slides:[]
    }
  },

  ready(){
    Product.fetchRecommend()
      .then(resp=>{
        this.products=resp.datalist;
        this.$rerender();
      });

    this.$http.post(URL_SLIDE_LIST)
      .then(function(resp){
        let slides=resp.data.datalist;
        slides.forEach(item=>{
          item.img=item.imgurl;
          item.url=item.link;
        });
        this.slides=slides;
      });
  }
});

</script>
