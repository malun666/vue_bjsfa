<template>
  <div class="product">
    <h1>这是产品页面{{id}}</h1>
  </div>
</template>

<script>
export default {
  name: "product",
  props: ["id"],
  data() {
    return {};
  }
};
</script>

<style scoped>
</style>
