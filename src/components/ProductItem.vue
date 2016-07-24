<template lang="html">
  <div :class="itemClass">
    <img :src="product.imgurl" v-image-height="thumbWidth" class="thumbnail" alt="" />

    <label class="checkbox checkbox-dark checkbox-small" v-if="isCartMode">
      <input type="checkbox" v-model="product.selected">
    </label>

    <h3 class="title" v-text="product.name"></h3>

    <div v-if="isDefaultMode" class="content">
      <strong class="assertive" v-text="product.price|price"></strong>
      <strike class="font-size-small" v-text="product.oldprice|price"></strike>
      <i class="dark icon icon-cart-plus" @click.stop="onCartButtonClick"></i>
    </div>
    <template v-if="isCartMode">
      <strong class="assertive" v-text="product.price|price"></strong>
      <x-number @on-change="onChange"  :value="product.num"></x-number>
      <i class="icon icon-trash-o" @click="onRemoveButtonClick"></i>
    </template>

    <template v-if="isOrderModel">
      <p class="assertive" v-text="product.price|price"></p>
      <p>
        x{{product.amount}}
      </p>
    </template>
  </div>
</template>

<script>
import Base from '../Base'

import {
  MODE_PRODUCT_DEF,
  MODE_PRODUCT_REC,
  MODE_PRODUCT_CART,
  MODE_PRODUCT_ORDER
} from '../const'

const classes=[
  'product-item product-item-def',
  'product-item product-item-rec',
  'item item-checkbox item-thumbnail-left item-icon-right product-item-cart',
  'item item-thumbnail-left'
]

export default Base.extend({
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
    },
    isLast:{
      type:Boolean,
      default:false
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
    },
    thumbWidth(){
      if(this.isRecMode){
        return this.imgFullWidth;
      }else if(this.isDefaultMode){
        return this.productThumbWidth
      }else {
        return 0;
      }
    }
  },
  methods: {
    onCartButtonClick(){
      this.$emit('on-add',this.product);
    },
    onChange(val){
      // this.$emit('on-amount-change',{
      //   product:this.product,
      //   val:val
      // });
      this.$emit('on-amount-change',this.product,val);
    },
    onRemoveButtonClick(){
      this.$emit('on-remove',this.product);
    }
  }
});
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
