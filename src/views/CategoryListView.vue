<template lang="html">
  <div class="">
      <bar-header :mode="mode"
      :show-back="false"
      v-touch:tap="onHeaderBarTap"></bar-header>
      <div class="scroll-content has-header">
          <scroller :lock-x="true" height="100%" v-ref:scroller>
            <div>
              <panel title="计生用品">
                <div class="list padding-bottom">
                  <cate-item v-link="{name:'products'}"></cate-item>
                  <cate-item v-link="{name:'products'}"></cate-item>
                  <cate-item v-link="{name:'products'}"> </cate-item>
                </div>
              </panel>
            </div>
          </scroller>
      </div>
  </div>
</template>

<script>
import HomeView from './HomeView'
import {MODE_HEADER_SEARCH} from '../const'
export default HomeView.extend({
  data: function () {
    return {
      mode:MODE_HEADER_SEARCH,
    }
  },
  computed: {},
  ready: function () {},
  attached: function () {},
  methods: {},
  components: {}
})
</script>

<style lang="css">
</style>
