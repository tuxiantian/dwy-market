<template lang="html">
  <div class="">
      <bar-header :mode="mode"
      :value.sync="keywords"
      :show-back="true">
      <button class="button button-clear"
        slot="right"
        v-touch:tap="onSearchBtnTap">
        搜索
      </button>
    </bar-header>
      <div class="scroll-content has-header">
          <scroller :lock-x="true" height="100%" v-ref:scroller>
              <group>
                  <cell title="fuck">helie</cell>
                  <cell title="fuck">helie</cell>
                  <cell title="fuck">helie</cell>
              </group>
          </scroller>
      </div>
  </div>
</template>

<script>
import BaseView from './BaseView'
import {MODE_HEADER_SEARCH} from '../const'
export default BaseView.extend({
  data: function () {
    return {
      keywords:'',
      mode:MODE_HEADER_SEARCH
    }
  },
  computed: {},
  ready: function () {},
  attached: function () {},
  methods: {
    onSearchBtnTap(){
      console.log(this.keywords);
    }
  },
  components: {}
})
</script>

<style lang="css">
</style>
