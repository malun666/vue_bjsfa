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
  }
};
</script>

<style scoped>
</style>
