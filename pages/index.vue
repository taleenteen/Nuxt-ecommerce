<template>
  <div class="container pa-12">
    <section class="d-none d-md-block mb-12">
      <HeroCategory />
    </section>
    <section class="md-mt-2">
      <HeroCarousel />
    </section>
    <section class="mt-12">
      <HeroFlashSale />
    </section>
  </div>
</template>

<script lang="ts" setup>
const { title, greetTitle } = storeToRefs(useGlobalStore());
</script>

<style scoped>
body {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  margin: 0;
}

.container {
  max-width: 1280px;
  width: 100%;
  background-color: #fff;
}

.textfield {
  width: 250px;
  height: 120px;
}
</style>
