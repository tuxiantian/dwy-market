<template lang="html">
  <div class="">
    <bar-header :mode="mode"
                :value.sync="keywords"
                :show-back="true">
      <button class="button button-clear"
              slot="right"
              v-touch:tap="onSearchBtnTap">
        搜索
      </button>
    </bar-header>
    <div class="scroll-content has-header">
      <scroller :lock-x="true"
                height="100%"
                v-ref:scroller
                @pullup:loading="searchProducts"
                :use-pullup="true"
                :pullup-config="pullupConfig">
        <div class="padding-vertical list">
          <product-item v-for="item of products"
                        track-by="id"
                        v-link="{name:'productDetail',params:{id:item.id}}"
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
  import {MODE_HEADER_SEARCH} from '../const'
  import Product from '../services/Product'
  import {PULLUP_CONFIG} from '../app.config'

  export default BaseView.extend({
    data () {
      return {
        keywords: '',
        pageNo: 1,
        pageSize: 20,
        hasMore:false,
        mode: MODE_HEADER_SEARCH,
        products: [],
        pullupConfig:Object.assign({},PULLUP_CONFIG)
      }
    },
    route:{
      deactivate(){

      }
    },
    watch:{
      hasMore(){
        this.togglePullup();
      }
    },
    methods: {

      reset(){
        this.products=[];
        this.hasMore=false;
        this.pageNo=1;
      },

      togglePullup(){
        let method=this.hasMore?'$enablePullup':'$disablePullup';

        this[method].call(this);
      },

      onSearchBtnTap(){
        this.reset();
        this.searchProducts();
      },
      searchProducts(){
        Product.search(this.keywords, this.pageNo, this.pageSize)
        .then(({datalist})=> {

          this.products=this.products.concat(datalist);

          this.hasMore=datalist.length>=this.pageSize;

          if(this.hasMore){
            this.pageNo++;
          }

          this.$resetPullup();

          this.$rerender();
        });
      }
    },
    components: {}
  })
</script>

<style lang="css">
</style>
