<template>
  <div class="home">
    <TheHeader />
    <TheCategories />
    <SectionOne />
    <SectionTwo />
    <SectionThree />
    <SectionFour />
  </div>
</template>

<script>
import TheHeader from "../components/TheHeader.vue";
import TheCategories from "../components/TheCategories.vue";
import SectionOne from "../components/SectionOne.vue";
import SectionTwo from "../components/SectionTwo.vue";
import SectionThree from "../components/SectionThree.vue";
import SectionFour from "../components/SectionFour.vue";

export default {
  name: "Home",
  components: {
    TheHeader,
    TheCategories,
    SectionOne,
    SectionTwo,
    SectionThree,
    SectionFour,
  },
  mounted() {
    window.scrollTo(0, 0);
  },
};
</script>
