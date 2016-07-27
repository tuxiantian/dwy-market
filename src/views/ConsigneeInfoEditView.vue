<template>
  <div class="view">
    <bar-header title="收货人编辑"></bar-header>
    <div class="scroll-content overflow-scroll has-header">
      <consignee-form @on-submit="onSubmit" :form-model="consignee"></consignee-form>
    </div>
  </div>
</template>
<script type="text/babel">
  import BaseView from './BaseView.vue'
  import Consignee from '../services/Consignee'
  import regions from 'vux/src/components/address/list.json'
  import _ from 'lodash'

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

        consignee.address=_.map([consignee.province,consignee.city,consignee.area],name=>{
          return _.find(regions,{name}).value;
        });
        transition.next({consignee:consignee});
      }
    },
    ready(){
      this.$on('update-consignee-success',()=>{
        this.$toast('更新收货人成功！');
        this.$goBack();
      });
    },
    methods: {
      onSubmit(){
        var model=Object.assign({},this.consignee);

        model.address=_.map(model.address,id=>{
          var region=_.find(regions,{value:id});
          return region?region.name:'';
        });

        this.updateConsignee(this.$root.UID,model);
      }
    }
  });
</script>
<style lang="scss">

</style>
