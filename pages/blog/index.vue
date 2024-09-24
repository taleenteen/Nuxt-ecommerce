<template>
  <div class="container pa-12">
    <Bar />
    <div class="mt-12">
      <v-text-field
        label="Title"
        placeholder="Input your title"
        type="text"
        v-model="title"
        class="textfield"
      ></v-text-field>
    </div>
    <v-chip close>{{ greetTitle }}</v-chip>
    <v-btn @click="useGlobalStore().sayHello(`${title}`)" color="success">
      MIKEY!
    </v-btn>
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
  max-width: 1366px;
  width: 100%;
  background-color: #fff;
}

.textfield {
  width: 250px;
  height: 120px;
}
</style>
