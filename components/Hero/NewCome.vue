<template>
  <div class="d-flex justify-center my-12" style="position: relative">
    <h2>สินค้าใหม่ประจำเดือน</h2>
    <v-btn style="right: 0; position: absolute"
      >ดูทั้งหมด <v-icon> mdi-chevron-right</v-icon></v-btn
    >
  </div>

  <v-carousel
    hide-delimiter-background
    show-arrows="hover"
    style="height: 330px"
  >
    <v-carousel-item v-for="(itemGroup, index) in groupedItems" :key="index">
      <v-row class="d-flex justify-start">
        <v-col
          v-for="(item, idx) in itemGroup"
          :key="idx"
          cols="12"
          sm="6"
          md="2"
          class="px-2"
        >
          <v-card
            class="mx-auto d-flex flex-column align-center"
            :max-width="200"
            :height="314"
            rounded="lg"
          >
            <v-img :src="item.picture" width="80" height="80"></v-img>
            <v-card-title class="text-center">{{ item.title }}</v-card-title>
          </v-card>
        </v-col>
      </v-row>
    </v-carousel-item>
  </v-carousel>
</template>

<script setup>
const productItem = [
  { title: "Computer", picture: "https://via.placeholder.com/150" },
  { title: "TV", picture: "https://via.placeholder.com/150" },
  { title: "Notebook", picture: "https://via.placeholder.com/150" },
  { title: "Smartphone", picture: "https://via.placeholder.com/150" },
  { title: "Tablet", picture: "https://via.placeholder.com/150" },
  { title: "Watch", picture: "https://via.placeholder.com/150" },
  { title: "Camera", picture: "https://via.placeholder.com/150" },
  { title: "Printer", picture: "https://via.placeholder.com/150" },
  { title: "Headphone", picture: "https://via.placeholder.com/150" },
  { title: "Speaker", picture: "https://via.placeholder.com/150" },
];

const groupedItems = [];
for (let i = 0; i < productItem.length; i += 6) {
  groupedItems.push(productItem.slice(i, i + 6));
}
</script>
