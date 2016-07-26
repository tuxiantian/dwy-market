<template>
  <div class="item item-button-right" :class="{'item-checkbox':showRadio}" @click="onItemClick">
    <label class="checkbox checkbox-dark checkbox-small" v-if="showRadio">
      <input type="radio" name="consignee" v-model="consignee.selected">
    </label>
    <h3 class="font-size-large">收货人：{{consignee.name}}
      <span class="badge badge-assertive" v-if="consignee.default">默认</span>
    </h3>
    <p class="margin-top item-desc" v-text="consignee.address"></p>

    <button class="button button-small button-icon font-size-secondary" v-text="consignee.phone"></button>
  </div>
</template>
<script type="text/babel">

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
    methods: {
      onItemClick(){
        this.consignee.selected = true;
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