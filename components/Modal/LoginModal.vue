<template>
  <div class="text-center pa-4">
    <v-btn @click="dialog = true" class="button mr-3"> เข้าสู่ระบบ </v-btn>

    <v-dialog v-model="dialog" width="580">
      <v-card max-width="400">
        <div class="d-flex justify-center pa-8 flex-column text-center">
          <h1 class="ma-4">TopTier</h1>
          <h3 class="ma-4">
            เครื่องมืออุปกรณ์ระดับเทพ! พร้อมจับจองได้แล้ว สมัครเลย!
          </h3>
          <NuxtLink class="ma-4 pa-2" to="/signin"
            ><v-btn @click="dialog = false">Signin</v-btn></NuxtLink
          >
          <NuxtLink class="ma-4 pa-2" to="/signup"
            ><v-btn @click="dialog = false">Signup</v-btn></NuxtLink
          >
        </div>
        <template v-slot:actions>
          <v-btn class="ms-auto" text="Ok" @click="dialog = false"></v-btn>
        </template>
      </v-card>
    </v-dialog>
  </div>
</template>

<script setup>
const dialog = ref(false);
</script>

<style scoped>
.button {
  background-color: rgb(45, 96, 205);
  color: white;
  font-weight: 700;
}
.button:hover {
  box-shadow: 0 2px 14px rgba(63, 81, 181, 0.5);
  z-index: 2;
  overflow: auto;
}
</style>
