<script setup>
import { reactive } from "vue";
import { useVuelidate } from "@vuelidate/core";
import { email, required } from "@vuelidate/validators";

const initialState = {
  name: "",
  password: "",
  email: "",
  select: null,
  checkbox: null,
};

const state = reactive({
  ...initialState,
});

const rules = {
  name: { required },
  password: { required },
  email: { required, email },
  select: { required },
  items: { required },
  checkbox: { required },
};

const v$ = useVuelidate(rules, state);

function clear() {
  v$.value.$reset();

  for (const [key, value] of Object.entries(initialState)) {
    state[key] = value;
  }
}
</script>

<template>
  <div class="login-page d-flex align-center justify-center">
    <div class="container">
      <div class="text-center mb-12">
        <h1>SIGNIN</h1>
        <p>How to get started? Click the button on the right side.</p>
      </div>
      <form>
        <v-text-field
          v-model="state.name"
          :error-messages="v$.name.$errors.map((e) => e.$message)"
          label="Name"
          required
          @blur="v$.name.$touch"
          @input="v$.name.$touch"
        ></v-text-field>

        <v-text-field
          v-model="state.name"
          :error-messages="v$.name.$errors.map((e) => e.$message)"
          label="Password"
          required
          @blur="v$.name.$touch"
          @input="v$.name.$touch"
        ></v-text-field>

        <v-checkbox
          v-model="state.checkbox"
          :error-messages="v$.checkbox.$errors.map((e) => e.$message)"
          label="Do you agree?"
          required
          @blur="v$.checkbox.$touch"
          @change="v$.checkbox.$touch"
        ></v-checkbox>

        <div class="d-flex justify-center">
          <v-btn class="button" @click="v$.$validate"> Signin now </v-btn>
        </div>
      </form>
    </div>
    <div>
      <v-img
        :width="600"
        :height="600"
        aspect-ratio="16/9"
        cover
        src="https://c4.wallpaperflare.com/wallpaper/284/154/521/ai-art-anthropomorphic-animals-cats-ninjas-hd-wallpaper-preview.jpg"
      ></v-img>
    </div>
  </div>
</template>

<style scoped>
.button {
  width: 200px;
}
.container {
  width: 600px;
  height: 600px;
  padding: 4rem;
  background-color: white;
}

.login-page {
  width: 100%;
  height: 100vh;
  background-image: url(https://wallpapercat.com/w/full/4/a/2/797159-3840x2160-desktop-4k-pastel-colors-wallpaper-photo.jpg);
}
</style>
