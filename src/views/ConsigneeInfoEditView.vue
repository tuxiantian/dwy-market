<template>
  <div class="view">
    <bar-header title="收货人编辑"></bar-header>
    <div class="scroll-content has-header">
      <consignee-form @on-submit="onSubmit" :form-model="consignee"></consignee-form>
    </div>
  </div>
</template>
<script>
  import BaseView from './BaseView.vue'
  import Consignee from '../services/Consignee'
  import regions from 'vux/src/components/address/list.json'
  import {find} from 'lodash'
  
  export default BaseView.extend({
    data(){
      return {
        consignee: {}
      }
    },
    route: {
      data(transition){
        let consignee = this.getConsigneeById(this.$route.params.id);
        
        consignee.address = [consignee.province, consignee.city, consignee.area].map(name=> {
          return find(regions, {name}).value;
        });
        transition.next({consignee: consignee});
      }
    },
    ready(){
      this.$on('update-consignee-success', ()=> {
        this.$toast('更新收货人成功！');
        this.$goBack();
      });
    },
    methods: {
      onSubmit(){
        var model = Object.assign({}, this.consignee);
        
        model.address = model.address.map(id=> {
          var region = find(regions, {value: id});
          return region ? region.name : '';
        });
        
        this.updateConsignee(this.$root.UID, model);
      }
    }
  });
</script>
<style lang="scss">

</style>
