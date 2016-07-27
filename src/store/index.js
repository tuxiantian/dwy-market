import Vuex from 'vuex'
import Vue from 'vue'
import mutations from './mutations'

Vue.use(Vuex);

const state = {
  cartItems: [],
  consignees:[]
};

export default new Vuex.Store({
  state,
  mutations
});