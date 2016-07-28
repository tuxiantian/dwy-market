<template>
  <div>
    <bar-header title="收货人管理">
      <button class="button button-assertive" slot="right" v-link="{name:'consigneeCreate'}">添加收货人</button>
    </bar-header>
    <div class="scroll-content has-header">
      <scroller :lock-x="true" height="100%" v-ref:scroller>
        <div>
          <consignee-info-item v-for="item of consignees | orderBy 'receid' -1"
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
  import {CONSIGNEE_DEFAULT} from '../const'

  const EDIT='edit';
  const SET_DEF='setDef';
  const REMOVE='remove';

  export default BaseView.extend({
    data(){
      return {
        currentConsignee:null,
        showActionsheet:false,
        routeConsigneeEdit:ROUTE_CONSIGNEE_EDIT,
        menus:{
          [EDIT]:'编辑',
          [SET_DEF]:'设为默认',
          [REMOVE]:'删除'
        }
      }
    },
    route:{
      activate(){
        this.$nextTick(()=>{
          this.$rerender();
        });
      }
    },
    ready(){
      this.$on('remove-consignee-success',()=>{
        this.$rerender();
      });
    },
    methods:{
      openActionsheet(){
        this.showActionsheet=true;
      },
      onConsigneeItemHold(item){
        this.currentConsignee=item;
        this.activeConsigneeItem(item);
        this.openActionsheet();
      },
      onMenuItemClick(key){
        switch (key){
          case EDIT:
            this.$router.go({name:ROUTE_CONSIGNEE_EDIT,params:{id:this.currentConsignee.receid}});
            break;
          case SET_DEF:
            this.setDefaultConsignee(this.currentConsignee.receid,this.$root.UID);
            break;
          case REMOVE:
            if(this.currentConsignee.isDefault===CONSIGNEE_DEFAULT){
              return this.$alert('默认收货人不允许删！删除之前请先设置其它默认收货人。');
            }
            this.removeConsigneeById(this.currentConsignee.receid);
            break;
          default:
            this.onActionsheetCancel();
        }
      },
      activeConsigneeItem(consignee){
        this.consignees.forEach(function (item) {
          item.active=consignee===item;
        });
      },
      onActionsheetCancel(){
        this.currentConsignee.active=false;
      }
    }
  })
</script>
<style lang="scss">

</style>
