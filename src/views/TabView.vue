<template lang="html">
  <div>

    <div>
      <button class="button button-assertive" v-for="comp of comps" @click="onAddButtonClick($index)">{{comp}}</button>
    </div>
    <tab active-color="#222">
      <tab-item v-for="tab of tabList"
                :selected="tab.status===status"
                @click="status = tab.status">{{tab.text}}</tab-item>
    </tab>
    <div class="">

      <div class="tab-content" v-for="tab of tabList" v-show="tab.status===status">
        <h1>I am {{tab.text}}</h1>
        <input type="text">
        <component :is="tab.component"></component>
      </div>

    </div>
  </div>
</template>
<script lang="babel">
  import BaseView from './BaseView.vue'
  export default BaseView.extend({
    data(){
      return {
        status:1,
        tabList: [
          {text:'tab1',status:1,component:'panel'}
        ],
        comps:['Hello','World']
      }
    },
    methods: {
      onAddButtonClick(i){

        var compName=this.comps[i];
        this.tabList.push({
          text:compName,
          status:compName,
          component:compName
        });
      }
    },
    components:{
      Hello:{
        template:`<h1>hello</h1>`
      },
      World:{
        template:`<h1>world</h1>`
      }
    }
  })
//6214 8357 1619 3246
</script>
<style lang="scss">

</style>