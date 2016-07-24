<template lang="html">
  <div class="">
    <bar-header title="我的粉丝"></bar-header>
    <div class="bar bar-subheader bar-tab">
      <tab active-color="#222">
        <tab-item v-for="tab of tabs"
          @click="type=tab.type"
          :selected="tab.type===type">
          {{tab.name}}
          <span class="badge badge-assertive" 
          v-show="tab.type===type"
          v-text="tab.amount"></span>
        </tab-item>
      </tab>
    </div>
    <div class="scroll-content has-subheader">

      <scroller :lock-x="true" height="100%" v-ref:scroller>
        <div class="">

        </div>
      </scroller>
    </div>
  </div>
</template>

<script>
import BaseView from './BaseView'
const FANS_ALL=0;
const FANS_INTIMACY=1;
export default BaseView.extend({
  data: function () {
    return {
      type:FANS_ALL,
      tabs:[
        {name:'所有粉丝',type:FANS_ALL,amount:0},
        {name:'亲密粉丝',type:FANS_INTIMACY,amount:0}
      ]
    }
  },
  computed: {},
  ready: function () {},
  attached: function () {},
  methods: {}
})
</script>

<style lang="scss" scoped>

  .bar-tab{
    display: block;
    padding:0;
  }
  .item-button-right{
    .button{
      top:40px;
    }
  }
</style>
