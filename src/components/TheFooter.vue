<template>
  <footer class="w-screen bg-darkBg text-text">
    <div class="content mx-auto max-w-7xl px-20">
      <div class="w-24 border-t-4 border-orange"></div>
      <div class="flex justify-between pt-16 pb-8">
        <div>
          <a href="">
            <img
              src="../images/shared/desktop/logo.svg"
              alt="logo"
              class="w-40"
            />
          </a>
        </div>
        <div>
          <router-link
            class="pl-10 pr-10 text-sm font-semibold tracking-widest hover:text-orange"
            to="/"
            >HOME</router-link
          >
          <router-link
            class="pl-10 pr-10 text-sm font-semibold tracking-widest hover:text-orange"
            to="/headphones"
            >HEADPHONES</router-link
          >
          <router-link
            class="pl-10 pr-10 text-sm font-semibold tracking-widest hover:text-orange"
            to="/speakers"
            >SPEAKERS</router-link
          >
          <router-link
            class="pl-10 text-sm font-semibold tracking-widest hover:text-orange"
            to="/earphones"
            >EARPHONES</router-link
          >
        </div>
      </div>
      <div class="flex justify-between items-end pb-3">
        <div class="w-1/2">
          <h1 class="text-base text-gray-600 leading-6 text-textDark">
            Audiophile is an all in one stop to fulfill your audio needs. We're
            a small team of music lovers and sound specialists who are devoted
            to helping you get the most out of personal audio. Come and visit
            our demo facility - we’re open 7 days a week.
          </h1>
        </div>
        <div class="w-1/2 flex justify-end items-end">
          <a href="" class="px-2">
            <img
              src="../images/shared/desktop/icon-facebook.svg"
              alt="facebook"
            />
          </a>
          <a href="" class="px-2">
            <img
              src="../images/shared/desktop/icon-twitter.svg"
              alt="twitter"
            />
          </a>
          <a href="" class="px-2">
            <img
              src="../images/shared/desktop/icon-instagram.svg"
              alt="instagram"
            />
          </a>
        </div>
      </div>
      <div class="py-12">
        <h1
          class="text-base text-gray-600 font-semibold leading-6 text-textDark"
        >
          Copyright 2021. All Rights Reserved
        </h1>
      </div>
    </div>
  </footer>
</template>
