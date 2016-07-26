import Vuex from 'vuex'
import Vue from 'vue'
import mutations from './mutations'

Vue.use(Vuex);

const state = {
	cartItems: []
};

export default new Vuex.Store({
	state,
	mutations
});