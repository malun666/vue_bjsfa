import Vue from "vue";
import Vuex from "vuex";
import state from "./state";
import mutations from "./mutations";
import actions from "./actions";
import getters from "./getters";
import User from "./User/index";

// vuex和vue-router都必须在使用之前必须进行use
Vue.use(Vuex); // $store

export default new Vuex.Store({
  state, // 全局的状态数据
  mutations,
  actions,
  getters,
  modules: {
    user: User
  }
});
