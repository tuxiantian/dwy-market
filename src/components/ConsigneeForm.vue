<template>
  <form @submit.prevent="onFormSubmit">
    <group>
      <x-input title="收货人" :value.sync="formModel.name"></x-input>
      <x-input title="电话" :value.sync="formModel.mobile"></x-input>
      <address title="省市区" :list="list" :value.sync="formModel.address" placeholder="请选择"></address>
      <x-textarea placeholder="详细地址" :min="2" :value.sync="formModel.detail"></x-textarea>
    </group>

    <group>
      <div class="padding-horizontal">
        <button type="submit" class="button button-assertive button-block">{{submitText}}</button>
      </div>
    </group>
  </form>
</template>
<script type="text/babel">
  import regions from 'vux/src/components/address/list.json'
  import Base from '../Base.vue'
  export default Base.extend({
    data(){
      return {
        list: regions
      }
    },
    props: {
      formModel:{
        type:Object,
        default(){
          return {};
        }
      },
      submitText:{
        type:String,
        default:'保存'
      }
    },
    methods: {
      onFormSubmit(e){
        this.$emit('on-submit',this.formModel,e);
      }
    }
  });
</script>
<style lang="scss">

</style>
