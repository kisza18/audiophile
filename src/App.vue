<template>
  <div id="nav flex flex-col">
    <TheNav />
    <div class="h-screen">
      <router-view />
    </div>
    <TheFooter />
  </div>
</template>

<script>
import TheNav from "./components/TheNav.vue";
import TheFooter from "./components/TheFooter.vue";

export default {
  components: {
    TheNav,
    TheFooter,
  },
};
</script>

<style scoped>
* {
  font-family: "Manrope", sans-serif;
}
</style>
