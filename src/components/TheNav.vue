<template>
  <nav class="w-full text-text absolute top-0 left-0 z-10">
    <!-- mobile nav -->
    <div
      class="mobile_nav flex items-center justify-between px-5 py-6 lg:hidden"
    >
      <div class="flex items-center">
        <button @click="toggle = !toggle" class="hamburger_btn pr-5">
          <img
            src="../images/shared/tablet/icon-hamburger.svg"
            alt="hamburger"
          />
        </button>
        <div class="logo">
          <a href="/">
            <img src="../images/shared/desktop/logo.svg" alt="logo" />
          </a>
        </div>
      </div>
      <div class="right_side flex items-center">
        <button class="text-text pr-4">
          <img src="../images/cart/icon-cart.svg" alt="" />
        </button>
        <button class="text-sm text-text py-2 md:ml-5">Sign In</button>
      </div>
    </div>
    <div v-if="toggle" class="dropdown w-full bg-darkBg py-10">
      <div class="links flex flex-col items-center">
        <router-link
          class="py-4 text-lg font-semibold tracking-widest hover:text-orange"
          to="/"
          >HOME</router-link
        >
        <router-link
          class="py-4 text-lg font-semibold tracking-widest hover:text-orange"
          to="/headphones"
          >HEADPHONES</router-link
        >
        <router-link
          class="py-4 text-lg font-semibold tracking-widest hover:text-orange"
          to="/speakers"
          >SPEAKERS</router-link
        >
        <router-link
          class="py-4 text-lg font-semibold tracking-widest hover:text-orange"
          to="/earphones"
          >EARPHONES</router-link
        >
      </div>
    </div>
    <!-- desktop nav -->
    <div
      class="desktop_nav hidden lg:flex items-center justify-between py-7 mx-auto px-20 max-w-7xl"
    >
      <div>
        <a href="/">
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
      <div class="flex items-center">
        <button class="text-text">
          <img src="../images/cart/icon-cart.svg" alt="" />
        </button>
        <button class="text-sm bg-orange text-text px-4 py-2 ml-5">
          Sign In
        </button>
      </div>
    </div>
    <div class="line flex max-w-7xl mx-auto"></div>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      toggle: false,
    };
  },
};
</script>
