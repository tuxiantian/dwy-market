

<template>

<div class="view">
    <router-view keep-alive class="scroll-content has-tabs" transition="fade"></router-view>
    <div class="tabs tabs-dark tabs-icon-top">
        <a class="tab-item" v-for="nav of navList" v-link="{name:nav.route,exact:true,replace:true}">
            <span class="badge badge-assertive" v-if="routeShoppingCart===nav.route">{{totalAmount}}</span>
            <i class="icon icon-{{nav.icon}}"></i> {{nav.title}}
        </a>
    </div>
</div>

</template>

<script type="text/javascript">
import BaseView from './BaseView'
import _ from 'lodash'
import {
    ROUTE_HOME,
    ROUTE_CATEGORY_LIST,
    ROUTE_SHOPPING_CART,
    ROUTE_ORDER_LIST,
    ROUTE_ME
}
from '../routes'

export default BaseView.extend({
  data() {
    return {
      routeShoppingCart:ROUTE_SHOPPING_CART,
      navList: [{
          route: ROUTE_HOME,
          title: '商城首页',
          icon: 'home'
      }, {
          route: ROUTE_CATEGORY_LIST,
          title: '分类',
          icon: 'list-ul'
      }, {
          route: ROUTE_SHOPPING_CART,
          title: '购物车',
          icon: 'shopping-cart'
      }, {
          route: ROUTE_ORDER_LIST,
          title: '订单',
          icon: 'building-o'
      }, {
          route: ROUTE_ME,
          title: '我是代言人',
          icon: 'user'
      }]
    }
  },
  computed:{

  },
  ready(){
    this.syncCartItems(this.$root.UID);
  }
});

</script>
