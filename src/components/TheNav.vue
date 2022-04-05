<template>
  <nav class="w-screen bg-darkBg text-text">
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
        <button>
          <i class="fal fa-shopping-cart text-xl"></i>
        </button>
      </div>
    </div>
  </nav>
</template>

<style scoped>
.content {
  border-bottom: 1px solid rgb(145, 145, 145);
}
</style>
