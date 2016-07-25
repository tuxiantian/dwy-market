<template>
  <div>
    <div class="item item-button-right">
      <h3 class="font-size-large">收货人：{{consignee.name}}</h3>
      <p class="margin-top item-desc" v-text="consignee.address"></p>
      <button class="button button-small button-icon font-size-secondary" v-text="consignee.phone"></button>
    </div>
  </div>
</template>
<script type="text/babel">
  export default{
    data(){
      return {
        msg: 'hello vue'
      }
    },
    props: {
      consignee:{
        type:Object,
        default(){
          return {}
        }
      },
      showRadio:{
        type:Boolean
      }
    },
    methods: {
      someFn(){

      }
    }
  }
</script>
<style lang="scss" scoped>
  .font-size-large{
    font-size: 17px !important;
  }

  .item-desc{
    white-space: normal;
  }
</style>