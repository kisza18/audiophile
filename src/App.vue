<template>
  <div id="nav flex flex-col">
    <router-view />
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  mounted() {
    window.scrollTo(0, 0);
  },
};
</script>

<style scoped>
* {
  font-family: "Manrope", sans-serif;
}
</style>
