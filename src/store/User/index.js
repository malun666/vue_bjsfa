export default {
  state: {
    UName: "app user name "
  },
  mutations: {
    ChangeUName(state, payload) {
      state.UName = payload;
    }
  },
  getters: {
    getUNameUpperCase(state) {
      return state.UName.toUpperCase();
    }
  },
  namespaced: true // 如果不设置为true
};
