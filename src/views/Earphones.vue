<template>
  <div class="about">
    <TheNav />
    <TheTitle title="earphones" />
    <LeftContainer
      title="YX1 EARPHONES"
      content="Tailor your listening experience with bespoke dynamic drivers from the new YX1 Wireless Earphones. Enjoy incredible high-fidelity sound even in noisy environments with its active noise cancellation feature."
      category="category-earphones"
      filename="image-yx1-earphones.jpg"
      url="/product/yx1-earphones"
    />
    <TheCategories />
    <SectionFour />
    <TheFooter />
  </div>
</template>

<script>
import TheNav from "../components/TheNav.vue";
import TheFooter from "../components/TheFooter.vue";
import TheTitle from "../components/TheTitle.vue";
import LeftContainer from "../components/LeftContainer.vue";
import TheCategories from "../components/TheCategories.vue";
import SectionFour from "../components/SectionFour.vue";

export default {
  mounted() {
    window.scrollTo(0, 0);
  },
  components: {
    TheNav,
    TheFooter,
    TheTitle,
    LeftContainer,
    TheCategories,
    SectionFour,
  },
};
</script>
