<script setup>
const categoryItem = [
  {
    title: "Computer",
    picture:
      "https://images.vexels.com/media/users/3/157318/isolated/lists/2782b0b66efa5815b12c9c637322aff3-desktop-computer-icon-computer.png",
  },
  {
    title: "TV",
    picture:
      "https://images.vexels.com/media/users/3/157318/isolated/lists/2782b0b66efa5815b12c9c637322aff3-desktop-computer-icon-computer.png",
  },
  {
    title: "NOTEBOOK",
    picture:
      "https://images.vexels.com/media/users/3/157318/isolated/lists/2782b0b66efa5815b12c9c637322aff3-desktop-computer-icon-computer.png",
  },
  {
    title: "NOTEBOOK",
    picture:
      "https://images.vexels.com/media/users/3/157318/isolated/lists/2782b0b66efa5815b12c9c637322aff3-desktop-computer-icon-computer.png",
  },
  {
    title: "NOTEBOOK",
    picture:
      "https://images.vexels.com/media/users/3/157318/isolated/lists/2782b0b66efa5815b12c9c637322aff3-desktop-computer-icon-computer.png",
  },
  {
    title: "NOTEBOOK",
    picture:
      "https://images.vexels.com/media/users/3/157318/isolated/lists/2782b0b66efa5815b12c9c637322aff3-desktop-computer-icon-computer.png",
  },
];
</script>

<template>
  <v-row class="d-flex flex-row justify-space-between flex-wrap">
    <v-col
      v-for="(item, index) in categoryItem"
      :key="index"
      cols="12"
      sm="4"
      md="2"
      class="pa-2"
    >
      <v-card
        class="mx-auto d-flex flex-column align-center bg-grey-lighten-3"
        :max-width="146"
        :height="126"
        rounded="lg"
      >
        <v-img
          :src="item.picture"
          :width="80"
          :height="80"
          class="mb-2"
        ></v-img>
        <v-card-title class="text-center">{{ item.title }}</v-card-title>
      </v-card>
    </v-col>
  </v-row>
</template>
