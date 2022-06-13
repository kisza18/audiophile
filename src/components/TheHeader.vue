<template>
  <div class="header w-full bg-darkBg relative">
    <div
      class="container max-w-7xl mx-auto md:px-20 w-full h-full bg-heroMobile bg-cover bg-center bg-no-repeat md:bg-heroTablet lg:bg-heroDesktop"
    >
      <div
        class="content h-full px-3 md:px-0 lg:w-1/2 text-center lg:text-left flex items-center py-44"
      >
        <div class="w-full">
          <p class="tag uppercase text-sm text-textDark py-4 font-thin">
            New product
          </p>
          <h1
            class="uppercase text-4xl md:text-6xl text-text pb-5 font-semibold tracking-wider"
          >
            XX99 MARK II HEADPHONES
          </h1>
          <p
            class="text-lg text-textDark pb-10 lg:w-96 px-3 md:px-24 lg:px-0 mb-3"
          >
            Experience natural, lifelike audio and exceptional build quality
            made for the passionate music enthusiast.
          </p>
          <a
            href="/headphones/1"
            class="uppercase text-sm bg-orange text-text py-4 px-6 tracking-wider hover:bg-orangelight"
          >
            see product
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.header {
  height: 100vh;
  max-height: 730px;
}
.tag {
  letter-spacing: 10px;
}
</style>
