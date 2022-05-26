<template>
  <nav class="w-screen fixed bg-darkBg text-text">
    <div
      class="content flex items-center justify-between py-8 mx-auto px-20 max-w-7xl"
    >
      <div>
        <a href="">
          <img src="../images/shared/desktop/logo.svg" alt="logo" />
        </a>
      </div>
      <div>
        <router-link
          class="px-4 text-sm font-semibold tracking-widest hover:text-orange"
          to="/"
          >HOME</router-link
        >
        <router-link
          class="px-4 text-sm font-semibold tracking-widest hover:text-orange"
          to="/headphones"
          >HEADPHONES</router-link
        >
        <router-link
          class="px-4 text-sm font-semibold tracking-widest hover:text-orange"
          to="/speakers"
          >SPEAKERS</router-link
        >
        <router-link
          class="px-4 text-sm font-semibold tracking-widest hover:text-orange"
          to="/earphones"
          >EARPHONES</router-link
        >
      </div>
      <div>
        <button class="text-text">
          <img src="../images/cart/icon-cart.svg" alt="" />
        </button>
      </div>
    </div>
    <div class="line max-w-7xl mx-auto"></div>
  </nav>
</template>

<style scoped>
.line {
  height: 1px;
  width: 1120px;
  background: gray;
}
</style>
