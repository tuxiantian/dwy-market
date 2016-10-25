<template lang="html">
  <div class="">
    <bar-header title="可提现金额"></bar-header>
    <div class="scroll-content has-header">
      <scroller :lock-x="true" height="100%" v-ref:scroller>


        <div class="">
          <div class="item item-button-right">
            <p>
              可提现金额
            </p>
            <h1>0.00</h1>
            <button type="button" class="button button-assertive">提现</button>
          </div>
          <group>
            <cell v-for="item of infoItems" :title="item.title">{{item.desc}}</cell>
          </group>

          <div class="margin-top">
            <div class="bar bar-tab">
              <tab active-color="#222">
                <tab-item>最近7天</tab-item>
                <tab-item>最近30天</tab-item>
              </tab>
            </div>
          </div>
        </div>
      </scroller>
    </div>
  </div>

</template>

<script lang="babel">
  import BaseView from './BaseView'
  import InfoItem from '../components/InfoItem'

  export default BaseView.extend({
    data: function () {
      return {
        infoItems: [
          {title: '本月奖励', desc: '0.00'},
          {title: '累计奖励', desc: '0.00'},
          {title: '冻结奖励', desc: '0.00'}
        ]
      }
    },
    computed: {},
    ready: function () {
    },
    attached: function () {
    },
    methods: {},
    components: {
      InfoItem
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
