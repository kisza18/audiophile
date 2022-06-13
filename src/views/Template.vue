<template>
  <div
    class="h-96 w-full flex flex-col items-center justify-center text-center mt-20 px-20"
  >
    <h1>page name: {{ productId }}</h1>
    <h1>name: {{ obj[0].name }}</h1>
    <h1>content: {{ obj[0].content }}</h1>
    <h1>price: {{ obj[0].price }}</h1>
    <h1>features: {{ obj[0].features }}</h1>
    <h1>featuresSecond: {{ obj[0].featuresSecond }}</h1>
  </div>
</template>

<script>
import json from "../data.json";
import { useRoute } from "vue-router";

export default {
  name: "Product",
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
