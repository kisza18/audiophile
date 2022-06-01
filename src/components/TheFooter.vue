<template>
  <footer class="w-full bg-darkBg text-text">
    <div class="content mx-auto max-w-7xl px-5 md:px-20">
      <div class="w-24 border-t-4 border-orange"></div>
      <div class="flex flex-col lg:flex-row justify-between pt-16 pb-8">
        <div class="w-full mb-10 lg:mb-0">
          <a class="w-full flex justify-center md:justify-start" href="">
            <img
              src="../images/shared/desktop/logo.svg"
              alt="logo"
              class="w-40"
            />
          </a>
        </div>
        <div class="flex flex-col md:flex-row items-center">
          <router-link
            class="pb-5 md:pb-0 md:pr-10 text-sm font-semibold tracking-widest hover:text-orange"
            to="/"
            >HOME</router-link
          >
          <router-link
            class="pb-5 md:pb-0 md:pl-4 md:pr-10 text-sm font-semibold tracking-widest hover:text-orange"
            to="/headphones"
            >HEADPHONES</router-link
          >
          <router-link
            class="pb-5 md:pb-0 md:pl-4 md:pr-10 text-sm font-semibold tracking-widest hover:text-orange"
            to="/speakers"
            >SPEAKERS</router-link
          >
          <router-link
            class="pb-5 md:pb-0 md:pl-4 text-sm font-semibold tracking-widest hover:text-orange"
            to="/earphones"
            >EARPHONES</router-link
          >
        </div>
      </div>
      <div class="md:flex justify-between items-end pb-3">
        <div class="w-full md:w-1/2">
          <h1
            class="text-base text-center md:text-left text-gray-600 leading-6 text-textDark"
          >
            Audiophile is an all in one stop to fulfill your audio needs. We're
            a small team of music lovers and sound specialists who are devoted
            to helping you get the most out of personal audio. Come and visit
            our demo facility - we’re open 7 days a week.
          </h1>
        </div>
        <div
          class="w-full md:w-1/2 pt-12 md:pt-0 flex justify-center md:justify-end items-end"
        >
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
          class="text-base text-center lg:text-left text-gray-600 font-semibold leading-6 text-textDark"
        >
          Copyright 2022. All Rights Reserved
        </h1>
      </div>
    </div>
  </footer>
</template>
