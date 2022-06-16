<template>
  <div class="home">
    <TheNav />
    <TheHeader />
    <TheCategories />
    <SectionOne />
    <SectionTwo />
    <SectionThree />
    <SectionFour />
    <TheFooter />
  </div>
</template>

<script>
import TheNav from "../components/TheNav.vue";
import TheHeader from "../components/TheHeader.vue";
import TheCategories from "../components/TheCategories.vue";
import SectionOne from "../components/SectionOne.vue";
import SectionTwo from "../components/SectionTwo.vue";
import SectionThree from "../components/SectionThree.vue";
import SectionFour from "../components/SectionFour.vue";
import TheFooter from "../components/TheFooter.vue";

export default {
  name: "Home",
  components: {
    TheNav,
    TheHeader,
    TheCategories,
    SectionOne,
    SectionTwo,
    SectionThree,
    SectionFour,
    TheFooter,
  },
  mounted() {
    window.scrollTo(0, 0);
  },
};
</script>
