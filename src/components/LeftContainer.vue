<template>
  <div class="section m-5 px-5 md:px-10 lg:px-20 max-w-7xl mx-auto">
    <div
      class="flex-col justify-center lg:justify-between lg:flex lg:flex-row lg:items-center"
    >
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
      <div class="lg:w-1/2">
        <div
          class="content text-center py-12 mx-5 md:mx-16 md:py-20 lg:text-left lg:mx-16 lg:mr-16"
        >
          <h1
            class="text-3xl uppercase font-bold tracking-wide pb-7 md:text-5xl lg:text-6xl"
          >
            {{ title }}
          </h1>
          <p class="mb-10">
            {{ content }}
          </p>
          <router-link
            :to="url"
            class="uppercase text-sm bg-orange text-text py-4 px-6 tracking-wider mt-8"
          >
            see product
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["title", "content", "filename", "category", "url"],
};
</script>
