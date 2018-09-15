import Vue from "vue";
// 第一步： 引入Router， 一种：cdn， 另外一种：直接import
import Router from "vue-router";
import Home from "./views/Home.vue";
import Login from "./views/Login";
import AddUser from "./views/User/AddUser.vue";
import EditUser from "./views/User/EditUser.vue";

import Left from "./views/Home/Left.vue";
import Right from "./views/Home/Right.vue";
import Footer from "./views/Home/Footer.vue";
// 第二步：使用use注册Router插件
Vue.use(Router); // 执行组件的 install方法

// 第三步：创建路由对象
const router = new Router({
  mode: "hash",
  routes: [
    {
      path: "/",
      name: "home",
      component: Home,
      redirect: "/kk",
      children: [
        {
          path: "kk",
          components: {
            default: Left,
            right: Right,
            foot: Footer
          }
        }
      ]
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
      beforeEnter: (to, from, next) => {
        console.log("路由对象的守卫");
        next();
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

router.beforeEach((to, from, next) => {
  console.log("全局的路由守卫：beforEach");
  // console.log("to", to);
  // console.log("from", from);
  //应用： 前端的权限校验。

  // 一定要调用next方法，调用next方法会让当前钩子依次向后执行。
  // if (to.path != "/home") next("/home");
  next();
});
router.beforeResolve((to, from, next) => {
  console.log("全局守卫：beforeResolve");
  // 一定要调用next方法，调用next方法会让当前钩子依次向后执行。
  next();
});
router.afterEach((to, from) => {
  console.log("全局守卫：afterEach");
});
export default router;
