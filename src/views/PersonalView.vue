<template lang="html">
  <div class="">
    <scroller :lock-x="true" height="100%" v-ref:scroller>
      <div class="">

        <template v-if="user">
          <div class="item item-avatar-left">
            <img :src="user.imgurl">
            <h2 class="font-size-large">{{user.nickname}}</h2>
            <a class="font-size">如何成为代言人?</a>
          </div>
          <group>
            <cell title="我的二维码" :is-link="true" @click="showQRCode=true"></cell>
            <cell title="收货地址管理" :is-link="true" v-link="{name:consigneeListView}"></cell>
          </group>

          <group>
            <cell title="代言可获奖励" :is-link="true" v-link="{name:'bonus'}">
              {{user.dyreward|price}}元
            </cell>
            <cell title="粉丝销量" :is-link="true" v-link="{name:'bonus'}">{{user.fansales|price}}元</cell>
            <cell title="可提现金额" :is-link="true" v-link="{name:'cashInfo'}">{{user.balance|price}}元</cell>
            <cell title="我的粉丝" :is-link="true" v-link="{name:'fans'}">{{user.fannum}}</cell>
          </group>

          <p class="text-center padding">
            你是由{{user.superior}}推荐
          </p>
        </template>

      </div>
    </scroller>
    <div class="view" v-if="user" v-show="showQRCode" @click="showQRCode=false">
      <img :src="user.qrcode" @click.stop>
    </div>
  </div>
</template>

<script lang="babel">
  import BaseView from './BaseView'
  import {ROUTE_CONSIGNEE_LIST} from '../routes'
  import User from '../services/User'

  export default BaseView.extend({
    data: function () {
      return {
        consigneeListView: ROUTE_CONSIGNEE_LIST,
        user: null,
        showQRCode:false
      }
    },
    computed: {},
    ready () {
      this.getUserInfo();
    },
    methods: {
      getUserInfo(){

        User.getInfo()
        .then(resp => {
          this.user = resp.data;
        });
      }
    },
    components: {}
  });
</script>

<style lang="scss" scoped>

  @import "../scss/mixins";
  @import "../scss/variables";
  .view {
    @include display-flex();
    @include align-items(center);
    @include justify-content(center);

    background-color: rgba($dark,0.5);

    & > img {
      width: 60%;
    }
  }
</style>
