<template>
  <div>
    <bar-header title="收货人编辑"></bar-header>
    <div class="scroll-content overflow-scroll has-header">
      <group>
        <x-input title="收货人" :value.sync="consignee.name"></x-input>
        <x-input title="电话" :value.sync="consignee.phone"></x-input>
        <address title="地址" :list="list" placeholder="请选择"></address>
        <x-textarea placeholder="详细地址"></x-textarea>
      </group>

      <group>
        <div class="padding-horizontal">
          <button class="button button-assertive button-block">保存</button>

        </div>
      </group>
    </div>
  </div>
</template>
<script type="text/babel">
  import BaseView from './BaseView.vue'
  import addressList from 'vux/src/components/address/list.json'
  import Consignee from '../services/Consignee'

  export default BaseView.extend({
    data(){
      return {
        list:addressList ,
        consignee:{}
      }
    },
    ready(){
      debugger;
      this.consignee=Consignee.getById(this.$route.params.id);
    },
    methods: {
      someFn(){

      }
    }
  });
</script>
<style lang="scss">

</style>