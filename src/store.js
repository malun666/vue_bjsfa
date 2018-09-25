import Vue from "vue";
import Vuex from "vuex";

// vuex和vue-router都必须在使用之前必须进行use
Vue.use(Vuex); // $store

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {}
});
