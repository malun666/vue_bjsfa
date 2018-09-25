import Vue from "vue";
import Vuex from "vuex";

// vuex和vue-router都必须在使用之前必须进行use
Vue.use(Vuex); // $store

export default new Vuex.Store({
  state: {
    num: 0,
    LoginUser: null
  }, // 全局的状态数据
  mutations: {
    AddNum(state, payload) {
      state.num += payload;
    }
  },
  actions: {}
});
