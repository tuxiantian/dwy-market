<template lang="html">
  <div class="">
      <bar-header :mode="mode"
      :show-back="false"
      v-touch:tap="onHeaderBarTap"></bar-header>
      <div class="scroll-content has-header">
          <scroller :lock-x="true" height="100%" v-ref:scroller>
            <div class="list padding-bottom light-bg">
              <cate-item v-for="item of categories"
                :title="item.name"
                :img="item.imgurl"
                v-link="{name:'products',query:{category:item.id}}"></cate-item>
                <button type="button" @click="addCartItem(100,10)" class="button button-assertive">add cart</button>
            </div>
          </scroller>
      </div>
  </div>
</template>

<script>
import BaseView from './BaseView'
import {MODE_HEADER_SEARCH} from '../const'
import Product from '../services/Product'

export default BaseView.extend({
  data: function () {
    return {
      mode:MODE_HEADER_SEARCH,
      categories:[]
    }
  },
  computed: {},
  ready: function () {
    Product.fetchCategory()
      .then(resp=>{
        this.categories=resp.data.datalist;
        this.$rerender();
      });
  },
  attached: function () {},
  methods: {},
  components: {}
})
</script>

<style lang="css">
</style>
