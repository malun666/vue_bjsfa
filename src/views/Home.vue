<template>
  <div class="home">
    <h1>home页面</h1>
    <div class="left">
      <router-view></router-view>
    </div>
    <div class="right">
      <router-view name="right"></router-view>
    </div>
    <div class="foot"> 
      <router-view name="foot"></router-view>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "home",
  components: {
    HelloWorld
  }
};
</script>

<style lang="scss" scoped>
.left {
  float: left;
  width: 200px;
  background-color: #098;
  height: 300px;
}
.foot {
  clear: both;
  height: 100px;
  background-color: blue;
}
.right {
  margin-left: 202px;
  background-color: #cc0;
}
</style>
