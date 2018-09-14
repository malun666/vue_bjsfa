<template>
  <div class="userinfo">
    <h1>这是用户页面{{$route.params.id}}</h1>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "userinfo",
  data() {
    return {};
  },
  // 路由进入组件之前
  beforeRouteEnter(to, from, next) {
    console.log("组件内的守卫beforeRouteEnter");
    next();
  },
  // 路由参数更新的时候执行
  beforeRouteUpdate(to, from, next) {
    console.log("组件内的守卫beforeRouteUpdate");
    next();
  },
  // 组件销毁的时候执行
  beforeRouteLeave(to, from, next) {
    console.log("组件内的守卫beforeRouteLeave");
    next();
  },
  beforeCreate() {
    console.log("===> before Create");
  },
  beforeUpdate() {
    console.log("===>before Update");
  },
  updated() {
    console.log("===> updated");
  },
  beforeDestroy() {
    console.log("===> before Destory");
  },
  destroyed() {
    console.log("===>destroyed");
  }
};
</script>

<style scoped>
</style>
