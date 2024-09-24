<template>
  <h1>Hello</h1>
  <h1>{{ title }}</h1>
</template>

<script lang="ts" setup>
import { storeToRefs } from "pinia";
import { useGlobalStore } from "~/stores/global";

const { title } = storeToRefs(useGlobalStore());
</script>
