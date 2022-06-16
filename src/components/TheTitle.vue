<template>
  <div
    class="bg-darkBg h-32 md:h-52 lg:h-72 mt-16 lg:mt-20 mb-16 text-text flex items-center justify-center"
  >
    <h1
      class="uppercase text-3xl md:text-4xl lg:text-6xl font-bold tracking-widest"
    >
      {{ title }}
    </h1>
  </div>
</template>

<script>
export default {
  props: ["title"],
};
</script>
