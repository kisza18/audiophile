<template>
  <div class="home">
    <TheHeader />
    <TheCategories />
    <SectionOne />
  </div>
</template>

<script>
import TheHeader from "../components/TheHeader.vue";
import TheCategories from "../components/TheCategories.vue";
import SectionOne from "../components/SectionOne.vue";

export default {
  name: "Home",
  components: { TheHeader, TheCategories, SectionOne },
  mounted() {
    window.scrollTo(0, 0);
  },
};
</script>
