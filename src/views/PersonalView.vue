<template lang="html">
  <div class="">
    <scroller :lock-x="true" height="100%" v-ref:scroller>
      <div class="">
        <div class="item item-avatar-left">
          <img src="../assets/ben.png">
          <h2 class="font-size-large">彭妈妈</h2>
          <a class="font-size">如何成为代言人?</a>
        </div>
        <group>
          <cell title="我的二维码" :is-link="true"></cell>
        </group>

        <group>
          <cell title="代言可获奖励" :is-link="true" v-link="{name:'bonus'}">
            0.00元
          </cell>
          <cell title="粉丝销量" :is-link="true">0.00元</cell>
          <cell title="可提现金额" :is-link="true" v-link="{name:'cashInfo'}">0.00元</cell>
          <cell title="我的粉丝" :is-link="true" v-link="{name:'fans'}">0</cell>
        </group>

        <p class="text-center padding">
          你是由习近平推荐
        </p>
      </div>
    </scroller>
  </div>
</template>

<script>
import BaseView from './BaseView'
export default BaseView.extend({
  data: function () {
    return {
    }
  },
  computed: {},
  ready: function () {},
  attached: function () {},
  methods: {},
  components: {}
});
</script>

<style lang="css">
</style>
