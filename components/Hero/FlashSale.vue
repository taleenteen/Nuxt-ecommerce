<template>
  <div class="my-12 d-flex">
    <h2 class="mr-12">Flash sale</h2>
    <div class="d-flex" style="gap: 16px">
      <v-btn v-for="(item, index) in categories" :key="index">
        <p>{{ item }}</p>
      </v-btn>
    </div>
    <div class="d-flex ml-auto">
      <h3>1hr:22m:33s</h3>
    </div>
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
const categories = [
  "ทั้งหมด",
  "หูฟัง/ลำโพง",
  "จัดโต๊ะคอม",
  "คอมพิวเตอร์",
  "เกมมิ่ง",
  "เครื่องเสียงมืออาชีพ",
];
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
