<template lang="html">
  <div :class="itemClass" v-link="{name:'productDetail',params:{id:34533}}">
    <img :src="p1" class="thumbnail" alt="" />

    <label class="checkbox checkbox-dark checkbox-small" v-if="isCartMode">
      <input type="checkbox">
    </label>

    <h3 class="title">日本进口充气娃娃,包邮，独家哦</h3>
    <div v-if="isDefaultMode" class="content">
      <strong class="assertive">￥750.00</strong>
      <strike class="font-size-small">￥1000.00</strike>
      <i class="dark icon icon-cart-plus"></i>
    </div>
    <template v-if="isCartMode">
      <strong class="assertive">￥750.00</strong>
      <x-number></x-number>
      <i class="icon icon-trash-o"></i>
    </template>

    <template v-if="isOrderModel">
      <p class="assertive">￥750.00</p>
      <p>
        x2
      </p>
    </template>
  </div>
</template>

<script>
import XNumber from 'vux/src/components/x-number'
import {MODE_PRODUCT_DEF,MODE_PRODUCT_REC,MODE_PRODUCT_CART,MODE_PRODUCT_ORDER} from '../const'
import p1 from '../assets/p1.jpg'
import p2 from '../assets/p2.jpg'

const classes=[
  'product-item product-item-def',
  'product-item product-item-rec',
  'item item-checkbox item-thumbnail-left item-icon-right product-item-cart',
  'item item-thumbnail-left'
]

export default {
  data: function () {
    return {
      p1:p1,
      p2:p2
    }
  },
  props:{
    mode:{
      type:Number,
      default:MODE_PRODUCT_DEF
    },
    product:{
      type:Object,
      default(){
        return {};
      }
    }
  },
  computed: {
    isDefaultMode(){
      return this.mode===MODE_PRODUCT_DEF;
    },
    isRecMode(){
      return this.mode===MODE_PRODUCT_REC;
    },
    isCartMode(){
      return this.mode===MODE_PRODUCT_CART;
    },
    isOrderModel(){
      return this.mode===MODE_PRODUCT_ORDER;
    },
    itemClass(){
      return classes[this.mode]
    }
  },
  methods: {},
  components: {
    XNumber
  }
}
</script>

<style lang="scss">
@import "../scss/variables.scss";
@import "../scss/mixins";
  .list{
    @include display-flex();
    @include flex-wrap(wrap);
  }

  .product-item{
    background: $light;

    .title{
      font-size: $font-size-base;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      margin-top:$content-padding;
    }

    .thumbnail{
      width: 100%;
      vertical-align: middle;
    }

    &.product-item-def{
      width: 50%;
      padding:$content-padding;
      border-bottom: 4px solid $stable;
      &:nth-child(2n-1){
        border-right:2px solid $stable;
      }

      &:nth-child(2n){
        border-left: 2px solid $stable;
      }
      .content{
        position: relative;
        padding-right: $content-padding*3;
        .icon{
          position: absolute;
          font-size: 24px;
          right: 0;
          bottom: 0;
          @include clickable();
        }
      }
    }

    &.product-item-rec{
      width: 100%;
      .title{
        padding:0 $content-padding;
        text-align: center;
      }
    }


  }
  .item.product-item-cart{
    width: 100%;
    border-right: none;
    padding-left: $item-thumbnail-width+$checkbox-width+$content-padding*4;
    padding-bottom: 8px;

    .title{
      margin-top: $content-padding/2;
    }

    .thumbnail{
      left:$checkbox-width+$content-padding*3;
    }
    .checkbox{
      right: auto;
    }
    .weui_cell{
      margin-top: $content-padding;
      padding: 0;
    }
    .weui_cell:before{
      display: none;
    }
    .weui_cell_primary{
      display: none;
    }
    .vux-number-input,.vux-number-selector{
      height: 28px;
    }
    .icon{
      font-size: 24px;
      color:$gray;
    }
  }
</style>
