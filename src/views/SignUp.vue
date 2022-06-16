<template>
  <div class="h-screen w-full bg-darkBg text-text">
    <div
      class="h-screen w-full bg-circlesBg bg-no-repeat bg-cover py-10 flex md:items-center"
    >
      <div class="container mx-auto lg:flex max-w-6xl items-center">
        <div class="flex flex-col max-w-sm mx-5 md:mx-auto lg:w-1/2">
          <router-link to="/" class="tracking-wider"
            ><i class="fal fa-angle-left text-orange font-bold pr-2 mb-6"></i
            >Back</router-link
          >
          <form action="">
            <h1 class="text-2xl font-bold mb-6">Sign up</h1>
            <div class="flex">
              <div class="flex flex-col mb-5 w-1/2">
                <label class="font-bold" for="email">First Name</label>
                <input
                  class="py-3 px-2 rounded-lg mt-2 mr-1 text-darkBg"
                  type="text"
                  name="firstName"
                  placeholder="First Name"
                />
              </div>
              <div class="flex flex-col mb-5 w-1/2">
                <label class="font-bold" for="email">Last Name</label>
                <input
                  class="py-3 px-2 rounded-lg mt-2 ml-1 text-darkBg"
                  type="text"
                  name="lastName"
                  placeholder="Last Name"
                />
              </div>
            </div>
            <div class="flex flex-col mb-5">
              <label class="font-bold" for="email">Email</label>
              <input
                class="py-3 px-2 rounded-lg mt-2 text-darkBg"
                type="email"
                name="email"
                placeholder="Email"
              />
            </div>
            <div class="flex flex-col mb-5">
              <label class="font-bold" for="password">Password</label>
              <input
                class="py-3 px-2 rounded-lg mt-2 text-darkBg"
                type="password"
                name="password"
                placeholder="Password"
              />
            </div>
            <div class="flex flex-col mb-5">
              <label class="font-bold" for="confirm">Confirm Password</label>
              <input
                class="py-3 px-2 rounded-lg mt-2 text-darkBg"
                type="password"
                name="confirm"
                placeholder="Password"
              />
            </div>
            <div class="flex">
              <button
                class="uppercase py-3 px-8 tracking-wider bg-orange rounded-lg hover:bg-orangelight"
              >
                sign up
              </button>
              <div class="flex flex-col ml-4">
                <h1>Already registered?</h1>
                <router-link class="text-orange font-bold" to="/signin"
                  >Sign In here!</router-link
                >
              </div>
            </div>
          </form>
        </div>
        <div class="hidden lg:flex lg:flex-col w-1/2 pr-20">
          <img src="../images/sign/image-signin-3.webp" alt="" />
        </div>
      </div>
    </div>
  </div>
</template>
