<script setup lang="ts">
import { RouterLink } from "vue-router";
</script>

<template>
  <nav>
    <div class="container">
      <RouterLink class="hero-link" to="/">Threddit</RouterLink>
      <div>
        <RouterLink class="link" to="/">Home</RouterLink>
        <RouterLink class="link" to="/login">Login</RouterLink>
      </div>
    </div>
  </nav>
</template>

<style scoped>
nav {
  height: 3rem;
}

.hero-link,
.link {
  text-decoration: none;
}

.hero-link {
  color: var(--green-1);
  font-size: 1.5rem;
}

.container {
  padding: 0.25rem 3rem;
  display: flex;
  justify-content: space-between;
}

.link:not(:last-child) {
  margin-right: 1rem;
}
</style>
