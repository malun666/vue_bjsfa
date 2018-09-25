<template>
  <div class="aboutd">
    <p @click="handlerClick">点击我吧!</p>
  </div>
</template>

<script>
export default {
  name: "aboutd",
  data() {
    return {};
  },
  methods: {
    handlerClick() {
      this.$emit("trans", 1);
    }
  }
};
</script>

<style scoped>
</style>
