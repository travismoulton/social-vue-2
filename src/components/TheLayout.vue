<script setup lang="ts">
import { RouterView } from "vue-router";

import TheNav from "./TheNav.vue";
</script>

<template>
  <header>
    <TheNav />
  </header>
  <main class="main">
    <RouterView />
  </main>
</template>

<style scoped>
.main {
  padding: 5rem 10rem;
}
</style>
