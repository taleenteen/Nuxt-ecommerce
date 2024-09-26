<template>
  <v-card>
    <v-layout>
      <v-app-bar prominent class="px-4">
        <v-app-bar-nav-icon
          v-if="title === `ok`"
          variant="text"
          @click.stop="drawer = !drawer"
        ></v-app-bar-nav-icon>
        <NuxtLink to="/"><h1 class="ml-3">TopTier</h1></NuxtLink>
        <v-btn class="ml-3"
          ><v-icon aria-hidden="false"> mdi-apps-box </v-icon>
          <h4 class="ml-2">สินค้าทั้งหมด</h4></v-btn
        >
        <v-spacer></v-spacer>
        <v-card-text>
          <v-text-field
            :loading="loading"
            append-inner-icon="mdi-magnify"
            density="compact"
            label="Search templates"
            variant="solo"
            hide-details
            single-line
            rounded="xl"
            @click:append-inner="onClick"
          ></v-text-field>
        </v-card-text>
        <v-spacer></v-spacer>
        <div class="d-flex">
          <v-btn class="circular-button mx-4 my-auto"
            ><v-icon aria-hidden="false"> mdi-cart-outline </v-icon></v-btn
          >
          <ModalLoginModal />
        </div>
      </v-app-bar>

      <v-navigation-drawer
        v-model="drawer"
        :location="$vuetify.display.mobile ? 'top' : undefined"
        temporary
      >
        <v-list :items="items"></v-list>
      </v-navigation-drawer>

      <v-main class="d-flex justify-center">
        <NuxtPage />
      </v-main>
    </v-layout>
  </v-card>
</template>

<script lang="ts" setup>
const drawer = ref(false);
const group = ref(null);
const items = [
  { title: "Foo", value: "foo" },
  { title: "Bar", value: "bar" },
  { title: "Fizz", value: "fizz" },
  { title: "Buzz", value: "buzz" },
];
const { title } = storeToRefs(useGlobalStore());

const loaded = ref(false);
const loading = ref(false);

const onClick = () => {
  loading.value = true;

  setTimeout(() => {
    loading.value = false;
    loaded.value = true;
  }, 2000);
};

watch(group, () => {
  drawer.value = false;
});
</script>

<style scoped>
.circular-button {
  width: 56px;
  height: 56px;
  border-radius: 50%;
}
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
