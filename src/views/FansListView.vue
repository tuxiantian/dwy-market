<template lang="html">
  <div class="">
    <bar-header title="我的粉丝"></bar-header>

    <!--亲密粉丝暂时不做。2016.10.25-->
    <!--<div class="bar bar-subheader bar-tab">-->
      <!--<tab active-color="#222">-->
        <!--<tab-item v-for="tab of tabs"-->
                  <!--@click="type=tab.type"-->
                  <!--:selected="tab.type===type">-->
          <!--{{tab.name}}-->
          <!--<span class="badge badge-assertive"-->
                <!--v-show="tab.type===type"-->
                <!--v-text="tab.amount"></span>-->
        <!--</tab-item>-->
      <!--</tab>-->
    <!--</div>-->
    <div class="scroll-content has-header">

      <scroller :lock-x="true" height="100%" v-ref:scroller>
        <div class="">
          <fans-item v-for="fans of fansList" :fans="fans"></fans-item>
        </div>
      </scroller>
    </div>
  </div>
</template>

<script lang="babel">
  import BaseView from './BaseView'
  import User from '../services/User'

  const FANS_ALL = 0;
  const FANS_INTIMACY = 1;
  export default BaseView.extend({
    data () {
      return {
        type: FANS_ALL,
        fansList: [],
        tabs: {
          all: {name: '所有粉丝', type: FANS_ALL, amount: 0},
          intimacy: {name: '亲密粉丝', type: FANS_INTIMACY, amount: 0}
        }
      }
    },
    route:{
      data(){
        this.queryFans();
      }
    },
    methods: {
      queryFans(){
        User.queryFansList(this.$root.UID)
        .then(({data})=> {
          this.fansList = data;
          this.$rerender();
//          this.tabs.all.amount=this.fansList.length;
        });
      }
    }
  })
</script>

<style lang="scss" scoped>

  .bar-tab {
    display: block;
    padding: 0;
  }

  .item-button-right {
    .button {
      top: 40px;
    }
  }
</style>
