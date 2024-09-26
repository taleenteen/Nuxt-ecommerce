<template>
  <div>
    <v-img
      class="pa-12 mx-auto"
      width="1000"
      rounded="xl"
      lazy
      :src="picture"
      style="border-radius: 50%"
    />
  </div>
</template>

<script setup>
const picture =
  "https://as1.ftcdn.net/v2/jpg/05/70/82/28/1000_F_570822890_UjpyZQC8F7C3fFH3mR4BDGM8Ic3GXV7l.jpg";
</script>
