<template>
  <div class="about">
    <TheTitle title="headphones" />
    <LeftContainer
      title="XX59 HEADPHONES"
      content="Enjoy your audio almost anywhere and customize it to your specific
            tastes with the XX59 headphones. The stylish yet durable versatile
            wireless headset is a brilliant companion at home or on the move."
      category="category-headphones"
      filename="image-xx59.jpg"
    />
    <RightContainer
      title="XX99MARKI HEADPHONES"
      content="As the gold standard for headphones, the classic XX99 Mark I offers detailed and accurate audio reproduction for audiophiles, mixing engineers, and music aficionados alike in studios and on the go."
      category="category-headphones"
      filename="image-xx99-mark-one.jpg"
    />
    <LeftContainer
      title="XX99MARKII HEADPHONES"
      content="The new XX99 Mark II headphones is the pinnacle of pristine audio. It redefines your premium headphone experience by reproducing the balanced depth and precision of studio-quality sound."
      category="category-headphones"
      filename="image-xx99-mark-two.jpg"
    />
    <TheCategories />
    <SectionFour />
  </div>
</template>

<script>
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
    TheTitle,
    LeftContainer,
    RightContainer,
    TheCategories,
    SectionFour,
  },
};
</script>
