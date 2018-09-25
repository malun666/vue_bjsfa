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
    },
    Login(state, user) {
      if (user) {
        state.LoginUser = user;
      }
    }
  },
  actions: {
    updateNumAsync({ commit }, payload) {
      setTimeout(() => {
        commit("AddNum", payload);
      }, 1000);
    }
  },
  getters: {
    // 从vuex中获取用户名,必须经过此getter进行处理
    getLoginUserName(state) {
      return state.LoginUser ? state.LoginUser.UserName : "未登录";
    }
  }
});
