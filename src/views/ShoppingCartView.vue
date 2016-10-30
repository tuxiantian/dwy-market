<template lang="html">
  <div class="">
    <div class="scroll-content has-footer">
      <scroller :lock-x=true height="100%" v-show="cartItems.length>0" v-ref:scroller>
        <div class="">
          <product-item :mode="mode"
            v-for="item of cartItems"
            @on-amount-change="onAmountChange"
            @on-remove="removeCartItem(item.cartid)"
                        track-by="cartid"
            :product="item">
          </product-item>
        </div>
      </scroller>
      <none-data-view v-show="cartItems.length===0" icon="shopping-cart" text="购物车空空如也">

      </none-data-view>
    </div>
    <footer class="bar bar-footer bar-button-right">
      <label class="checkbox checkbox-dark checkbox-small">
        <input type="checkbox"
              :checked="isAllSelected"
                @change="toggleAll"
               :disabled="cartItems.length===0">
      </label>
      <span >全选</span>
      <div class="content text-right">
        <div>
          <strong>合计:
            <span class="assertive" v-text="totalPrice|price"></span>
          </strong>
        </div>
        <div class="font-size-small">不含运费</div>
      </div>
      <button type="button pull-right button-full"
              class="button button-assertive"
              :disabled="selectedCartItems.length===0"
              v-link="{name:'orderCreate'}">立即结算</button>
    </footer>
  </div>
</template>

<script>
import BaseView from './BaseView'
import {MODE_PRODUCT_CART} from '../const'
export default BaseView.extend({
  data: function () {
    return {
      mode:MODE_PRODUCT_CART
    }
  },
  computed: {

  },
  ready: function () {},
  attached: function () {},
  methods: {
    onAmountChange(product,amount){
      this.insertOrUpdate({
        productId:product.id,
        amount,
      })
    },
    toggleAll(){
      if (this.isAllSelected) {
        this.cartItems.forEach(item=> {
          item.selected = false;
        });
      } else {
        this.cartItems.forEach(item=> {
          item.selected = true;
        });
      }
    }
  },
  components: {}
})
</script>

<style lang="scss">
@import "../scss/variables.scss";
@import "../scss/mixins";
  .bar.bar-footer{
    @include align-items(center);

    .content{
      padding-top: $content-padding/2;
      position: absolute;
      top:0;
      left:$checkbox-width+$content-padding*2;
      right: $content-padding*8;
    }

    &.bar-button-right{
      .button{
        position: absolute;
        right: 0;
        top:1px;
        height: 100%;
        border-radius: 0;
      }
    }
  }
</style>
