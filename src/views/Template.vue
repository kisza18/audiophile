<template>
  <div class="w-full mt-44">
    <TheProduct
      title="xx59 headphones"
      content="Tailor your listening experience with bespoke dynamic drivers from the new YX1 Wireless Earphones. Enjoy incredible high-fidelity sound even in noisy environments with its active noise cancellation feature."
      category="category-earphones"
      filename="image-yx1-earphones.jpg"
    />
    <TheCategories />
    <SectionFour />
  </div>
</template>

<script>
import json from "../data.json";
import { useRoute } from "vue-router";
import TheProduct from "../components/TheProduct.vue";
import TheCategories from "../components/TheCategories.vue";
import SectionFour from "../components/SectionFour.vue";

export default {
  name: "Product",
  components: { TheProduct, TheCategories, SectionFour },
  data() {
    return {
      json,
      obj: {},
      productId: "",
    };
  },
  created() {
    const route = useRoute();
    this.productId = route.params.product;
    this.obj = json[this.productId];
  },
};
</script>
