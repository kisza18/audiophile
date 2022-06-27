<template>
  <div>
    <TheNav />
    <div class="w-full mt-32 lg:mt-44">
      <div class="section m-5 px-5 md:px-16 max-w-7xl mx-auto">
        <div
          class="flex-col justify-center md:justify-between md:flex md:flex-row md:items-center"
        >
          <div class="image md:w-1/2 md:py-10 md:pr-10 lg:pr-16">
            <img
              class="rounded-lg md:hidden"
              :src="
                require(`@/images/${obj[0].productName}/mobile/image-product.jpg`)
              "
              alt=""
            />
            <img
              class="rounded-lg hidden md:flex lg:hidden"
              :src="
                require(`@/images/${obj[0].productName}/tablet/image-product.jpg`)
              "
              alt=""
            />
            <img
              class="rounded-lg hidden lg:flex"
              :src="
                require(`@/images/${obj[0].productName}/desktop/image-product.jpg`)
              "
              alt=""
            />
          </div>
          <div class="md:w-1/2">
            <div
              class="content py-12 mx-0 md:mx-0 md:py-20 lg:text-left lg:mx-16 lg:mr-16"
            >
              <h1
                class="text-3xl uppercase font-bold tracking-wide pb-7 md:text-4xl lg:text-6xl"
              >
                {{ obj[0].name }}
              </h1>
              <p>
                {{ obj[0].content }}
              </p>
              <h1 class="text-2xl font-bold pt-6 tracking-wider">
                $ <span>{{ obj[0].price }}</span>
              </h1>
              <div class="flex items-center mt-10">
                <div class="bg-cardBg py-2 mr-5">
                  <button
                    class="px-4"
                    :disabled="quantity <= 1"
                    @click="quantity--"
                  >
                    -
                  </button>
                  <span class="font-bold px-3">{{ quantity }}</span>
                  <button class="px-4" @click="quantity++">+</button>
                </div>
                <button
                  @click="addToCart"
                  class="uppercase text-sm bg-orange text-text py-2 font-bold px-6 tracking-wider"
                >
                  add to cart
                </button>
              </div>
            </div>
          </div>
        </div>
        <div class="flex-col lg:flex lg:flex-row text-left w-full mt-20">
          <div class="features lg:w-3/4 lg:pr-44 text-justify">
            <h1 class="uppercase text-3xl font-semibold tracking-wider">
              Features
            </h1>
            <p class="py-6">
              {{ obj[0].features }}
            </p>
            <p>
              {{ obj[0].featuresSecond }}
            </p>
          </div>
          <div class="inthebox lg:w-1/4 mt-20 lg:mt-0">
            <h1 class="uppercase text-3xl font-semibold tracking-wider mb-5">
              in the box
            </h1>
            <ul
              class="flex"
              v-for="item in obj[0].inthebox"
              :key="item.additional"
            >
              <li class="text-orange font-bold pb-2">{{ item.quantity }}x</li>
              <li class="text-textDark font-normal pl-6">
                {{ item.additional }}
              </li>
            </ul>
          </div>
        </div>
        <div class="gallery flex flex-col md:flex md:flex-row mt-32 mb-10">
          <div class="flex flex-col justify-between md:mr-7">
            <div>
              <img
                class="rounded-lg mb-5 md:mb-0 w-full"
                :src="
                  require(`@/images/${obj[0].productName}/desktop/image-gallery-2.jpg`)
                "
                alt=""
              />
            </div>
            <div>
              <img
                class="rounded-lg mb-5 md:mb-0 w-full"
                :src="
                  require(`@/images/${obj[0].productName}/desktop/image-gallery-1.jpg`)
                "
                alt=""
              />
            </div>
          </div>
          <div>
            <img
              class="w-full rounded-lg"
              :src="
                require(`@/images/${obj[0].productName}/desktop/image-gallery-3.jpg`)
              "
              alt=""
            />
          </div>
        </div>
      </div>
      <TheCategories />
      <SectionFour />
    </div>
    <TheFooter />
  </div>
</template>

<script>
import json from "../data.json";
import { useRoute } from "vue-router";
import TheCategories from "../components/TheCategories.vue";
import SectionFour from "../components/SectionFour.vue";
import TheNav from "../components/TheNav.vue";
import TheFooter from "../components/TheFooter.vue";

export default {
  name: "Product",
  components: { TheCategories, SectionFour, TheNav, TheFooter },
  data() {
    return {
      quantity: 1,
      json,
      obj: {},
      productId: "",
      cart: [],
    };
  },
  methods: {
    addToCart() {
      this.cart.push({ id: this.obj[0].id, quantity: this.quantity });
      this.quantity = 1;
      console.log(this.cart);
    },
  },
  created() {
    const route = useRoute();
    this.productId = route.params.product;
    this.obj = json[this.productId];
  },
  mounted() {
    window.scrollTo(0, 0);
  },
};
</script>
