import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

Vue.config.productionTip = false;

// 第四步：把Vue项目的根Vue实例，添加router选项的配置。
new Vue({
  router,
  store, // 设置了当前的store之后,所有的子vue实例都可以通过$store拿到当前的store实例.
  render: h => h(App)
}).$mount("#app");
