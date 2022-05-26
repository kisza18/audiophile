<template>
  <div class="w-full bg-darkBg">
    <div class="header w-full max-w-7xl mx-auto px-20 py-44">
      <div class="content">
        <p class="tag uppercase text-sm text-textDark py-4 font-thin">
          New product
        </p>
        <h1 class="uppercase text-6xl text-text pb-5 font-semibold">
          XX99 MARK II HEADPHONES
        </h1>
        <p class="text-base text-textDark pb-10 w-96">
          Experience natural, lifelike audio and exceptional build quality made
          for the passionate music enthusiast.
        </p>
        <button
          class="uppercase text-sm bg-orange text-text py-4 px-6 tracking-wider"
        >
          see product
        </button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.header {
  background-image: url("../images/home/desktop/image-hero.jpg");
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;
  height: 100vh;
  max-height: 700px;
}
.content {
  width: 400px;
}
.tag {
  letter-spacing: 10px;
}
</style>
