<template>
  <div class="about">
    <TheNav />
    <TheTitle title="speakers" />
    <LeftContainer
      title="ZX7 SPEAKER"
      content="Stream high quality sound wirelessly with minimal to no loss. The ZX7 speaker uses high-end audiophile components that represents the top of the line powered speakers for home or studio use."
      category="category-speakers"
      filename="image-zx7.jpg"
      url="/product/zx7-speaker"
    />
    <RightContainer
      title="ZX9 SPEAKER"
      content="Upgrade your sound system with the all new ZX9 active speaker. It's a bookshelf speaker system that offers truly wireless connectivity -- creating new possibilities for more pleasing and practical audio setups."
      category="category-speakers"
      filename="image-zx9.jpg"
      url="/product/zx9-speaker"
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
import RightContainer from "../components/RightContainer.vue";
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
    RightContainer,
    TheCategories,
    SectionFour,
  },
};
</script>
