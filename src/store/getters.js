export default {
  // 从vuex中获取用户名,必须经过此getter进行处理
  getLoginUserName(state) {
    return state.LoginUser ? state.LoginUser.UserName : "未登录";
  }
};
