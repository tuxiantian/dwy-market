<template>
  <div class="item item-button-right" :class="{'item-checkbox':showRadio}" @click="onItemClick">
    <label class="checkbox checkbox-dark checkbox-small" v-if="showRadio">
      <input type="radio" name="consignee" :checked="consignee.selected">
    </label>
    <h3 class="font-size-large">收货人：{{consignee.name}}
      <span class="badge badge-assertive" v-if="isDefault">默认</span>
    </h3>
    <p class="margin-top item-desc" v-text="address"></p>

    <button class="button button-small button-icon font-size-secondary" v-text="consignee.mobile"></button>
  </div>
</template>
<script>
  import {CONSIGNEE_DEFAULT} from '../const'
  export default {
    data(){
      return {
        msg: 'hello vue'
      }
    },
    props: {
      consignee: {
        type: Object,
        default(){
          return {}
        }
      },
      showRadio: {
        type: Boolean,
        default: false
      }
    },
    computed:{
      address(){
        let consignee=this.consignee;
        return `${consignee.province}${consignee.city}${consignee.area}${consignee.detail}`;
      },
      isDefault(){
        return this.consignee.isDefault==CONSIGNEE_DEFAULT;
      }
    },
    methods: {
      onItemClick(){
        this.$emit('on-select',this.consignee);
      }
    }
  }
</script>
<style lang="scss" scoped>
  .font-size-large {
    font-size: 17px !important;
  }

  .item-desc {
    white-space: normal;
  }
  .badge{
    position: static;
    right: auto;
    left:auto;
    display: inline-block;
  }
</style>
