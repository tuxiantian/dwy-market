<template lang="html">
  <div class="">
    <bar-header title="商品列表"></bar-header>
    <div class="scroll-content has-header">
      <scroller :lock-x="true" height="100%" v-ref:scroller>
        <div class="padding-vertical list">
          <product-item></product-item>
          <product-item></product-item>
          <product-item></product-item>
          <product-item></product-item>
          <product-item></product-item>
          <product-item></product-item>
          <product-item></product-item>
          <product-item></product-item>
          <product-item></product-item>
          <product-item></product-item>
          <product-item></product-item>
        </div>
      </scroller>
    </div>
  </div>
</template>

<script>
import BaseView from './BaseView'
import Product from '../services/Product'
export default BaseView.extend({
  data: function () {
    return {
      products:[]
    }
  },
  computed: {},
  route:{
    data(){
      return Product.fetch(this.$route.query.category)
        .then(resp=>{
          return {products:resp.data.datalist};
        });
    }
  },
  ready: function () {},
  attached: function () {},
  methods: {},
  components: {}
});
</script>

<style lang="css">
</style>
