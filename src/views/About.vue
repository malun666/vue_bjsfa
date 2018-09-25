<template>
  <div class="about">
    <h1>This is an about page</h1>
    <aboutd @trans="handler"></aboutd>
    <aboutd @trans="handler"></aboutd>
    <aboutd @trans="handler"></aboutd>
    <aboutd @trans="handler"></aboutd>
    <aboutd @trans="handler"></aboutd>
  </div>
</template>
<script>
import aboutd from "../components/DemoAbout";
export default {
  components: {
    aboutd
  },
  methods: {
    handler(e) {
      console.log(e);
    }
  }
};
</script>
