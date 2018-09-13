import Vue from "vue";
// 第一步： 引入Router， 一种：cdn， 另外一种：直接import
import Router from "vue-router";
import Home from "./views/Home.vue";
import Login from "./views/Login";
import AddUser from "./views/User/AddUser.vue";
import EditUser from "./views/User/EditUser.vue";
// 第二步：使用use注册Router插件
Vue.use(Router);

// 第三步：创建路由对象
export default new Router({
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/login",
      name: "login",
      component: Login
    },
    {
      path: "/user/:id",
      name: "user",
      component: () => import("./views/UserInfo.vue"),
      redirect: to => {
        return `/user/${to.params.id}/add`;
      },
      children: [
        {
          path: "add", // /user/3333/add
          component: AddUser
        },
        {
          path: "edit",
          component: EditUser
        }
      ]
    },
    {
      path: "/product/:id",
      name: "product",
      props: true,
      component: () => import("./views/Product.vue")
    },
    {
      path: "/about",
      name: "about",
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import(/* webpackChunkName: "about" */ "./views/About.vue")
    }
  ]
});
