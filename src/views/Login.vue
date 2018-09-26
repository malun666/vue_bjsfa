<template>
  <div class="login">
    <h1>这是登录页面</h1>
    <input type="button" value="登录" @click="loginSuccess">
    <input type="button" value="直接调用映射的方法登录" @click="Login({UserName: 'sfjdlsdjflsdj'})">
  </div>
</template>

<script>
import { mapMutations } from "vuex";
export default {
  name: "login",
  data() {
    return {};
  },
  methods: {
    loginSuccess() {
      this.$store.commit("Login", { UserName: "laoma" });
    },
    ...mapMutations(["Login"])
  }
};
</script>

<style scoped>
</style>
