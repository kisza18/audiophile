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
          <form @submit.prevent>
            <h1 class="text-2xl font-bold mb-6">Sign in</h1>
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
            <div class="flex">
              <button
                class="uppercase py-3 px-8 tracking-wider bg-orange rounded-lg hover:bg-orangelight"
              >
                sign in
              </button>
              <div class="flex flex-col ml-4">
                <h1>Not registered yet?</h1>
                <router-link class="text-orange font-bold" to="/signup"
                  >Sign Up here!</router-link
                >
              </div>
            </div>
            <div class="flex mt-4">
              <h1 class="font-thin pr-2">Forget your password?</h1>
              <button @click="toggle = !toggle" class="text-orange">
                Click Here!
              </button>
            </div>
          </form>
        </div>
        <div class="hidden lg:flex lg:flex-col w-1/2 pr-20">
          <img src="../images/sign/image-signin-3.webp" alt="" />
        </div>
      </div>
      <div
        v-if="toggle"
        class="absolute top-0 left-0 bg-darkBg h-screen w-full flex items-center justify-center"
      >
        <div class="bg-cardBg m-5 p-5 rounded-lg max-w-2xl">
          <button @click="toggle = !toggle" class="tracking-wider text-darkBg">
            <i class="fal fa-angle-left text-orange font-bold pr-2 mb-6"></i
            >Back
          </button>
          <h1 class="text-2xl text-darkBg mb-6 font-bold">
            Reset your password
          </h1>
          <p class="text-darkBg">
            To reset your password, enter your email below and submit. An email
            will be sent to you with instructions about how to complete the
            process.
          </p>
          <div class="flex flex-col mb-5 mt-5">
            <label class="font-bold text-darkBg" for="email"
              >Email Address</label
            >
            <input
              class="py-3 px-2 rounded-lg mt-2 text-darkBg"
              type="email"
              name="emailAddress"
              placeholder="Insert your email address..."
            />
          </div>
          <button
            @click="toggle = !toggle"
            class="bg-orange py-3 px-6 tracking-wider uppercase rounded-lg"
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  </div>
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
