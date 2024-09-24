<template>
  <div class="text-center pa-4">
    <v-btn @click="dialog = true" class="button mr-3"> เข้าสู่ระบบ </v-btn>

    <v-dialog v-model="dialog" width="auto">
      <v-card
        max-width="400"
        prepend-icon="mdi-update"
        text="Your application will relaunch automatically after the update is complete."
        title="Update in progress"
      >
        <template v-slot:actions>
          <v-btn class="ms-auto" text="Ok" @click="dialog = false"></v-btn>
        </template>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
export default {
  data() {
    return {
      dialog: false,
    };
  },
};
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
