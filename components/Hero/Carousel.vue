<template>
  <v-carousel
    height="400"
    show-arrows="hover"
    cycle
    hide-delimiter-background
    touch
  >
    <v-carousel-item v-for="(slide, i) in slides" :key="i" rounded="xl">
      <v-sheet :color="colors[i]" height="100%">
        <div class="d-flex fill-height justify-center align-center">
          <div class="text-h2">{{ slide }} Slide</div>
        </div>
      </v-sheet>
    </v-carousel-item>
  </v-carousel>
  <div class="d-flex justify-space-between pa-4 my-8">
    <div class="d-flex" v-for="(service, index) in services" :key="index">
      <div class="mx-4 my-auto">
        <v-icon aria-hidden="false"> {{ service.icon }} </v-icon>
      </div>
      <div>
        <h4>{{ service.title }}</h4>
        <p class="text-caption">
          {{ service.content }}
        </p>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
const services = [
  {
    title: "Free Home Delivery",
    icon: "mdi-truck",
    content:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quae, dignissimos?",
  },
  {
    title: "24/7 Support",
    icon: "mdi-phone",
    content:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quae, dignissimos?",
  },
  {
    title: "Quick Support",
    icon: "mdi-truck",
    content:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quae, dignissimos?",
  },
  {
    title: "Secure Payment Way",
    icon: "mdi-phone",
    content:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quae, dignissimos?",
  },
];

const colors = [
  "indigo",
  "warning",
  "pink darken-2",
  "red lighten-1",
  "deep-purple accent-4",
];
const slides = ["First", "Second", "Third", "Fourth", "Fifth"];
</script>
