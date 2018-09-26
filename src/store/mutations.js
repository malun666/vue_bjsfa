export default {
  AddNum(state, payload) {
    state.num += payload;
  },
  Login(state, user) {
    if (user) {
      state.LoginUser = user;
    }
  }
};
