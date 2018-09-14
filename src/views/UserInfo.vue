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
  beforeRouteEnter(to, from, next) {
    console.log("组件内的守卫beforeRouteEnter");
    next();
  },
  beforeRouteUpdate(to, from, next) {
    console.log("组件内的守卫beforeRouteUpdate");
    next();
  },
  beforeRouteLeave(to, from, next) {
    console.log("组件内的守卫beforeRouteLeave");
    next();
  }
};
</script>

<style scoped>
</style>
