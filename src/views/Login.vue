<template>
  <div class="login">
    <h1>这是登录页面</h1>
    <input type="button" value="登录" @click="loginSuccess">
  </div>
</template>

<script>
export default {
  name: "login",
  data() {
    return {};
  },
  methods: {
    loginSuccess() {
      this.$store.commit("Login", { UserName: "laoma" });
    }
  }
};
</script>

<style scoped>
</style>
