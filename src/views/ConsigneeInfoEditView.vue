<template>
  <div class="view">
    <bar-header title="收货人编辑"></bar-header>
    <div class="scroll-content overflow-scroll has-header">
      <consignee-form @on-submit="" :form-model="consignee"></consignee-form>
    </div>
  </div>
</template>
<script type="text/babel">
  import BaseView from './BaseView.vue'
  import Consignee from '../services/Consignee'


  export default BaseView.extend({
    data(){
      return {
        consignee:{

        }
      }
    },
    route:{
      data(transition){
        let consignee=this.getConsigneeById(this.$route.params.id);
        consignee.address=[consignee.province,consignee.city,consignee.area];
        transition.next({consignee:consignee});
      }
    },
    methods: {
      someFn(){

      }
    }
  });
</script>
<style lang="scss">

</style>
