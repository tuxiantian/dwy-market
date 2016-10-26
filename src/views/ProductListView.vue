<template lang="html">
  <div class="">
    <bar-header title="商品列表"></bar-header>
    <div class="scroll-content has-header">
      <scroller :lock-x="true" height="100%" v-ref:scroller>
        <div class="padding-vertical list">
          <product-item v-for="item of products"
            v-link="{name:'productDetail',params:{id:item.id}}"
            track-by="id"
            @on-add="insertOrUpdate({productId:item.id,uid:$root.UID})"
            :product="item">
          </product-item>
        </div>
      </scroller>
    </div>
  </div>
</template>

<script lang="babel">
import BaseView from './BaseView'
import Product from '../services/Product'
import p1 from '../assets/p1.jpg'
import p2 from '../assets/p2.jpg'

export default BaseView.extend({
  data () {
    return {
      cateId:null,
      products:[]
    }
  },

  route:{
    data(transition){
      transition.next({cateId:this.$route.query.category});
    }
  },
  watch:{
    cateId(val){
      if(!val)return;
      this.fetchProducts();
    }
  },
  methods: {
    fetchProducts(){
      Product.fetch(this.cateId)
        .then(({datalist})=>{
        
          this.products=datalist;
          this.$rerender();
        });
    }
  }
});
</script>

<style lang="css">
</style>
