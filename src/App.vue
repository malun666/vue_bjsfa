<template>
  <div id="app">
    <h1>vuex里面的num:{{$store.state.num}} --- {{MyNum}}</h1>
    <p>当前的登录用户是: {{$store.getters.getLoginUserName}}</p>
    <p>{{getLoginUserName}}</p>
    <hr>
    <input type="button" value="修改全局vuex里面的num+1" @click="addVuexNum">
    <input type="button" value="修改全局vuex里面的num-1" @click="minusVuexNum">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link tag="p" to="/about">About</router-link> |
      <router-link to="/login">Login</router-link> |
      <router-link :to="UserUrl">跳转到用户页面</router-link>
    </div>
    <hr>
    <input type="button" value="跳转到用户页面" @click="$router.push('/User/666666')">
    <input type="button" value="跳转到用户页面8888" @click="$router.push({name: 'user', params: {id: 8888}})">
    <input type="button" value="跳转到用户页面home" @click="navToHome">
    <input type="button" value="后退一页" @click="backPage">
    <hr>
    <transition name="rv-fade">
      <router-view/>
    </transition>
  </div>
</template>
<script>
import { mapState, mapGetters } from "vuex";
export default {
  data: function() {
    return {
      UserUrl: "/User/090909"
    };
  },
  computed: {
    getUserURL: function() {
      return this.UserUrl.toLowerCase();
    },
    // ...mapState(["num", "LoginUser"]) // 把vuex中的state状态映射到组件中的计算属性中.
    ...mapState({
      MyNum: "num",
      User: state => state.LoginUser
    }),
    ...mapGetters(["getLoginUserName"])
  },
  methods: {
    addVuexNum() {
      this.$store.commit("AddNum", 1);
    },
    minusVuexNum() {
      this.$store.commit("AddNum", -1);
    },
    navToHome() {
      this.$router.push("home");
    },
    backPage() {
      this.$router.go(-1);
    }
  }
};
</script>

<style lang="scss">
.rv-fade-enter {
  opacity: 0;
  transform: translateY(-30px);
}
.rv-fade-enter-active {
  transition: all 1s ease;
}
.rv-fade-enter-to {
  opacity: 1;
  transform: translateY(0px);
}
.rv-fade-leave {
  opacity: 1;
  transform: translateY(30px);
}
.rv-fade-leave-active {
  transition: all 1s ease;
}
.rv-fade-leave-to {
  opacity: 0;
  transform: translateY(0px);
}

#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
