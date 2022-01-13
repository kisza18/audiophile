<template>
  <nav class="w-screen bg-darkBg text-text">
    <div class="content flex items-center justify-between py-8 mx-20">
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
          to="/"
          >HEADPHONES</router-link
        >
        <router-link
          class="px-4 text-sm font-semibold tracking-widest hover:text-orange"
          to="/"
          >SPEAKERS</router-link
        >
        <router-link
          class="px-4 text-sm font-semibold tracking-widest hover:text-orange"
          to="/"
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
