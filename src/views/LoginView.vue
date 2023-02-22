<script setup lang="ts">
import { reactive } from "vue";
import { usePost, loading, isError } from "../composables/useAxios";

import TheInput from "@/components/TheInput.vue";
import type { UserResponse } from "../stores/User";
import { useUserStore } from "../stores/User";

const userStore = useUserStore();

const formData = reactive({
  email: "",
  password: "",
});

const formError = reactive({
  isError: false,
  message: "",
});

function clearFormError() {
  formError.isError = false;
  formError.message = "";
}

function handleInput(value: string, input: "email" | "password") {
  formData[input] = value;
}

async function onSubmit() {
  // make api call to login and redirect to home
  const res = await usePost("/users/login", {
    email: formData.email,
    password: formData.password,
  });

  if (isError(res) && res.response?.data) {
    formError.message = res.response.data.data.message;
    formError.isError = true;
  } else if (res.status === "success") {
    clearFormError();
    const userData = res.data as UserResponse;
    userStore.loginUser(userData);
    // router.push()
  }
}
</script>

<template>
  <div class="login">
    <TheInput
      input-label="email"
      @update:model-value="(val: string) => handleInput(val, 'email')"
    />
    <TheInput
      input-label="password"
      @update:model-value="(val: string) => handleInput(val, 'password')"
    />

    <button class="button" @click="onSubmit">Login</button>
    <p class="error" v-if="formError.isError">{{ formError.message }}</p>
  </div>
</template>

<style scoped>
.login {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
  margin-top: 5rem;
}

.button {
  width: 10rem;
}
</style>
