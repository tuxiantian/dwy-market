<template lang="html">

</template>

<script lang="babel">
  import Vue from 'vue'
  import imageHeight from './directives/imageHeight'
  import price from './filters/price'

  import Scroller from 'vux/src/components/scroller'
  import Group from 'vux/src/components/group'
  import Cell from 'vux/src/components/cell'
  import XNumber from 'vux/src/components/x-number'
  import Address from 'vux/src/components/address'
  import XInput from 'vux/src/components/x-input'
  import XTextarea from 'vux/src/components/x-textarea'
  import Swiper from 'vux/src/components/swiper'
  import SwiperItem from 'vux/src/components/swiper-item'
  import {Tab, TabItem} from 'vux/src/components/tab'
  import Radio from 'vux/src/components/radio'
  import Actionsheet from 'vux/src/components/actionsheet'
  import Popup from 'vux/src/components/popup'


  import {isUndefined} from 'lodash'

  export default Vue.extend({
    data: function () {
      const width = document.body.offsetWidth;
      return {
        imgFullWidth: width,
        productThumbWidth: width / 2 - 20
      }
    },
    directives: {
      imageHeight
    },
    filters: {
      price,
      toString(val){
        return isUndefined(val) ? '' : val + '';
      }
    },
    components: {
      Scroller,
      Group,
      Cell,
      XNumber,
      Swiper,
      SwiperItem,
      XTextarea,
      Tab,
      TabItem,
      Radio,
      Actionsheet,
      Address,
      XInput,
      Popup
    }
  });
</script>

<style lang="css">
</style>
