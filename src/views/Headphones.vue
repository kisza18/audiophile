<template>
  <div class="about">
    <TheNav />
    <TheTitle title="headphones" />
    <LeftContainer
      title="XX59 HEADPHONES"
      content="Enjoy your audio almost anywhere and customize it to your specific
            tastes with the XX59 headphones. The stylish yet durable versatile
            wireless headset is a brilliant companion at home or on the move."
      category="category-headphones"
      filename="image-xx59.jpg"
      url="/product/xx59-headphones"
    />
    <RightContainer
      title="XX99MARKI HEADPHONES"
      content="As the gold standard for headphones, the classic XX99 Mark I offers detailed and accurate audio reproduction for audiophiles, mixing engineers, and music aficionados alike in studios and on the go."
      category="category-headphones"
      filename="image-xx99-mark-one.jpg"
      url="/product/xx99-mark-one-headphones"
    />
    <LeftContainer
      title="XX99MARKII HEADPHONES"
      content="The new XX99 Mark II headphones is the pinnacle of pristine audio. It redefines your premium headphone experience by reproducing the balanced depth and precision of studio-quality sound."
      category="category-headphones"
      filename="image-xx99-mark-two.jpg"
      url="/product/xx99-mark-two-headphones"
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
