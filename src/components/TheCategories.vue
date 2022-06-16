<template>
  <div
    class="m-4 pt-6 pb-10 lg:pt-24 px-5 md:px-20 rounded-full max-w-7xl mx-auto md:pt-12 md:pb-20"
  >
    <div class="container md:flex items-center justify-between">
      <div
        class="card bg-cardBg relative w-full h-44 shadow-lg flex items-end justify-center text-center mt-24"
      >
        <img
          class="absolute bottom-20 md:bottom-16 lg:bottom-14 left-1/2 transform -translate-x-1/2 h-40 lg:h-52"
          src="../images/category/image-headphones.webp"
          alt=""
        />
        <div class="content uppercase py-6 flex flex-col items-center">
          <h1 class="text-darkBg font-bold text-xl pb-3">Headphones</h1>
          <router-link
            to="/headphones"
            class="text-textDark text-sm font-bold tracking-wide uppercase flex items-center"
          >
            Shop
            <img
              class="pl-2"
              src="../images/shared/desktop/icon-arrow-right.svg"
              alt=""
            />
          </router-link>
        </div>
      </div>
      <div
        class="card bg-cardBg relative w-full h-44 shadow-lg flex items-end justify-center text-center mt-24 md:mx-5 lg:mx-12"
      >
        <img
          class="absolute bottom-20 md:bottom-16 lg:bottom-14 left-1/2 transform -translate-x-1/2 h-40 lg:h-52"
          src="../images/category/image-speakers.webp"
          alt=""
        />
        <div class="content uppercase py-6 flex flex-col items-center">
          <h1 class="text-darkBg font-bold text-xl pb-3">Speakers</h1>
          <router-link
            to="/speakers"
            class="text-textDark text-sm font-bold tracking-wide uppercase flex items-center"
          >
            Shop
            <img
              class="pl-2"
              src="../images/shared/desktop/icon-arrow-right.svg"
              alt=""
            />
          </router-link>
        </div>
      </div>
      <div
        class="card bg-cardBg relative w-full h-44 shadow-lg flex items-end justify-center text-center mt-24"
      >
        <img
          class="absolute bottom-20 md:bottom-16 lg:bottom-14 left-1/2 transform -translate-x-1/2 h-40 lg:h-52"
          src="../images/category/image-earphones.webp"
          alt=""
        />
        <div class="content uppercase py-6 flex flex-col items-center">
          <h1 class="text-darkBg font-bold text-xl pb-3">Earphones</h1>
          <router-link
            to="/earphones"
            class="text-textDark text-sm font-bold tracking-wide uppercase flex items-center"
          >
            Shop
            <img
              class="pl-2"
              src="../images/shared/desktop/icon-arrow-right.svg"
              alt=""
            />
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>
