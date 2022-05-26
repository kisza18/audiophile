<template>
  <div class="home">
    <TheHeader />
  </div>
</template>

<script>
import TheHeader from "../components/TheHeader.vue";

export default {
  name: "Home",
  components: { TheHeader },
  mounted() {
    window.scrollTo(0, 0);
  },
};
</script>
