import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store/index";

Vue.config.productionTip = false;

// 第四步：把Vue项目的根Vue实例，添加router选项的配置。
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
