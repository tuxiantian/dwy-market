<template lang="html">
  <div>

    <div>
      <button class="button button-assertive" @click="onAddButtonClick">add tab</button>
    </div>
    <tab active-color="#222">
      <tab-item v-for="tab of tabList"
                :selected="tab.status===status"
                @click="status = tab.status">{{tab.text}}</tab-item>
    </tab>
    <div class="">

      <div class="tab-content" v-for="tab of tabList" v-show="tab.status===status">
        <h1>I am {{tab.text}}</h1>

        <div>
          <input type="text" class="">
        </div>
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
          {text:'tab1',status:1}
        ]
      }
    },
    props: {
      someProp: {
        type: String,
        default: ''
      }
    },
    methods: {
      onAddButtonClick(){
        var num=parseInt(Math.random()*100);
        this.tabList.push({
          text:'tab'+num,
          status:num
        })
      }
    }
  })

</script>
<style lang="scss">

</style>