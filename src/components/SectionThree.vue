<template>
  <div
    class="section m-5 mb-10 md:mb-24 lg:mb-32 px-5 md:px-20 max-w-7xl mx-auto"
  >
    <div class="flex-col w-full items-center md:flex md:flex-row">
      <div
        class="bg-yx1Mobile md:bg-yx1MTablet lg:bg-yx1Desktop bg-cover h-52 md:h-72 lg:h-80 rounded-lg mb-6 md:mb-0 md:w-1/2 md:mr-3"
      ></div>
      <div class="bg-cardBg rounded-lg md:w-1/2 md:ml-3">
        <div
          class="container px-5 md:px-7 lg:px-20 h-52 md:h-72 lg:h-80 flex flex-col justify-center"
        >
          <h1
            class="uppercase text-darkBg text-3xl mb-9 font-bold tracking-wider"
          >
            yx1 earphones
          </h1>
          <router-link
            to="/product/yx1-earphones"
            class="bg-transparent w-40 text-center uppercase text-sm font-bold tracking-wider px-5 py-3"
          >
            see product
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
a {
  border: 1px solid black;
}
</style>
