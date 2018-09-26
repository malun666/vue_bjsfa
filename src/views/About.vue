<template>
  <div class="about">
    <h1>This is an about page</h1>
    <h3>vuex里面的num: {{$store.state.num}}
    </h3>
    <aboutd @trans="handler"></aboutd>
    <aboutd @trans="handler"></aboutd>
    <aboutd @trans="handler"></aboutd>
    <aboutd @trans="handler"></aboutd>
    <aboutd @trans="handler"></aboutd>
    <hr>
    <input type="text" v-model="num">
    <input type="button" value="异步action修改num" @click="asyncUpdateNum">
    <input type="button" value="映射的异步action修改num" @click="updateNumAsync(Number(num))">
  </div>
</template>
<script>
import { mapActions } from "vuex";
import aboutd from "../components/DemoAbout";
export default {
  data: function() {
    return {
      num: 1
    };
  },
  components: {
    aboutd
  },
  methods: {
    asyncUpdateNum() {
      this.$store.dispatch("updateNumAsync", Number(this.num));
    },
    handler(e) {
      console.log(e);
    },
    ...mapActions(["updateNumAsync"])
  }
};
</script>
