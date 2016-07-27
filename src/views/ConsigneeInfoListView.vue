<template>
  <div>
    <bar-header title="收货人管理">
      <button class="button button-assertive" slot="right" v-link="{name:'consigneeCreate'}">添加收货人</button>
    </bar-header>
    <div class="scroll-content has-header">
      <scroller :lock-x="true" height="100%" v-ref:scroller>
        <div>
          <consignee-info-item v-for="item of consignees"
                               :class="{active:item.active}"

                               v-touch:press="onConsigneeItemHold(item)"
                               :consignee="item">

          </consignee-info-item>
        </div>
      </scroller>
    </div>
    <actionsheet :show.sync="showActionsheet"
                 show-cancel
                 cancel-text="取消"
                 :menus="menus"
                 @on-click-menu="onMenuItemClick">

    </actionsheet>
  </div>
</template>
<script>
  import BaseView from './BaseView'
  import {Consignee,Address} from '../services/Consignee';
  import {ROUTE_CONSIGNEE_EDIT} from '../routes'
  const EDIT='edit';
  const SET_DEF='setDef';
  const REMOVE='remove';

  export default BaseView.extend({
    data(){
      return {
        selectedConsignee:null,
        showActionsheet:false,
        routeConsigneeEdit:ROUTE_CONSIGNEE_EDIT,
        menus:{
          [EDIT]:'编辑',
          [SET_DEF]:'设为默认',
          [REMOVE]:'删除'
        }
      }
    },

    methods:{
      openActionsheet(){
        this.showActionsheet=true;
      },
      onConsigneeItemHold(item){
        this.selectedConsignee=item;
        this.activeConsigneeItem(item);
        this.openActionsheet();
      },
      onMenuItemClick(key){
        switch (key){
          case EDIT:
            this.$router.go({name:ROUTE_CONSIGNEE_EDIT,params:{id:this.selectedConsignee.receid}});
            break;
          case SET_DEF:
            this.$toast('setDef');
            break;
          case REMOVE:
            Consignee.removeById(this.selectedConsignee.id);
            this.$rerender();
        }
      },
      activeConsigneeItem(consignee){
        this.consignees.forEach(function (item) {
          item.active=consignee===item;
        });
      },
      onActionsheetCancel(){
        this.selectedConsignee.active=false;
      }
    }
  })
</script>
<style lang="scss">

</style>