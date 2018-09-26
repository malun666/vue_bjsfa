export default {
  updateNumAsync({ commit }, payload) {
    setTimeout(() => {
      commit("AddNum", payload);
    }, 1000);
  }
};
