<template>
  <div class="section m-5 px-5 md:px-20 max-w-7xl mx-auto">
    <div
      class="flex-col justify-center lg:justify-between lg:flex lg:flex-row-reverse lg:items-center"
    >
      <div class="lg:w-1/2">
        <div
          class="content text-center py-12 mx-5 md:mx-16 md:py-20 lg:text-left lg:mx-16 lg:mr-16"
        >
          <h1
            class="text-3xl uppercase font-bold tracking-wide pb-7 md:text-4xl lg:text-6xl"
          >
            {{ title }}
          </h1>
          <p>
            {{ content }}
          </p>
          <h1 class="text-2xl font-bold pt-6 tracking-wider">
            $ <span>950</span>
          </h1>
          <div class="flex items-center mt-10">
            <div class="bg-cardBg py-2 mr-5">
              <button class="px-4">-</button>
              <span class="font-bold px-3">1</span>
              <button class="px-4">+</button>
            </div>
            <button
              class="uppercase text-sm bg-orange text-text py-2 font-bold px-6 tracking-wider"
            >
              add to cart
            </button>
          </div>
        </div>
      </div>
      <div class="image lg:w-1/2 lg:py-10 lg:pr-16">
        <img
          class="rounded-lg md:hidden"
          :src="require(`@/images/${category}/mobile/${filename}`)"
          alt=""
        />
        <img
          class="rounded-lg hidden md:flex lg:hidden"
          :src="require(`@/images/${category}/tablet/${filename}`)"
          alt=""
        />
        <img
          class="rounded-lg hidden lg:flex"
          :src="require(`@/images/${category}/desktop/${filename}`)"
          alt=""
        />
      </div>
    </div>
    <div class="flex text-left w-full mt-20">
      <div class="features w-3/4 pr-44">
        <h1 class="uppercase text-3xl font-semibold tracking-wider">
          Features
        </h1>
        <p class="py-6">
          These headphones have been created from durable, high-quality
          materials tough enough to take anywhere. Its compact folding design
          fuses comfort and minimalist style making it perfect for travel.
          Flawless transmission is assured by the latest wireless technology
          engineered for audio synchronization with videos.
        </p>
        <p>
          More than a simple pair of headphones, this headset features a pair of
          built-in microphones for clear, hands-free calling when paired with a
          compatible smartphone. Controlling music and calls is also intuitive
          thanks to easy-access touch buttons on the earcups. Regardless of how
          you use the XX59 headphones, you can do so all day thanks to an
          impressive 30-hour battery life that can be rapidly recharged via
          USB-C.
        </p>
      </div>
      <div class="inthebox w-1/4">
        <h1 class="uppercase text-3xl font-semibold tracking-wider">
          in the box
        </h1>
        <div class="list pt-5">
          <h1 class="text-orange font-bold pb-2">
            1x
            <span class="text-textDark font-normal pl-6">Headphone unit</span>
          </h1>
          <h1 class="text-orange font-bold pb-2">
            2x
            <span class="text-textDark font-normal pl-6"
              >Replacement earcups</span
            >
          </h1>
          <h1 class="text-orange font-bold pb-2">
            1x
            <span class="text-textDark font-normal pl-6">User manual</span>
          </h1>
          <h1 class="text-orange font-bold">
            1x
            <span class="text-textDark font-normal pl-6"
              >3.5mm 5m audio cable</span
            >
          </h1>
        </div>
      </div>
    </div>
    <div class="gallery flex mt-32 mb-10">
      <div class="flex flex-col justify-between mr-7">
        <div>
          <img
            class="rounded-lg"
            src="../images/product-xx59-headphones/desktop/image-gallery-2.jpg"
            alt=""
          />
        </div>
        <div>
          <img
            class="rounded-lg"
            src="../images/product-xx59-headphones/desktop/image-gallery-1.jpg"
            alt=""
          />
        </div>
      </div>
      <div>
        <img
          class="w-full rounded-lg"
          src="../images/product-xx59-headphones/desktop/image-gallery-3.jpg"
          alt=""
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["title", "content", "filename", "category"],
};
</script>
