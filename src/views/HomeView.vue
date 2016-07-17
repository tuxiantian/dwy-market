<template lang="html">

<div class="">
    <bar-header :mode="headerType"
    :show-back="false"
    :show-cancel="false"
    v-touch:tap="onHeaderBarTap"></bar-header>
    <div class="scroll-content has-header">
        <scroller :lock-x="true" height="100%" v-ref:scroller>
          <div>
            <swiper height="200px" :list="slides"></swiper>
            <div class="list margin-top">
              <product-item mode="rec"></product-item>
              <product-item mode="rec"></product-item>
            </div>
          </div>
        </scroller>
    </div>
</div>

</template>

<script type="text/javascript">

import BaseView from './BaseView.vue'

import {MODE_HEADER_SEARCH} from '../const'
import {ROUTE_SEARCH} from '../routes'

import p2 from '../assets/p2.jpg'
import p1 from '../assets/p1.jpg'

export default BaseView.extend({
  data() {
    return {
      headerType: MODE_HEADER_SEARCH,
      slides:[
        {img:p1},
        {img:p2}
      ]
    }
  },
  methods: {
    onHeaderBarTap(){
      this.$router.go({name:ROUTE_SEARCH});
    }
  }
});

</script>
