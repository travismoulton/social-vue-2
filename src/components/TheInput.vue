<script lang="ts">
const inputTypes = ["text", "email", "password"];
</script>
<script setup lang="ts">
const emit = defineEmits(["update:modelValue"]);

defineProps({
  inputLabel: String,
  type: {
    type: String,
    default: "text",
    validator: (type: string) => inputTypes.includes(type),
  },
});

function onInput(e: Event) {
  const { value } = e.target as HTMLInputElement;
  emit("update:modelValue", value);
}
</script>

<template>
  <div class="wrapper">
    <label class="label" :for="inputLabel">{{ inputLabel }}:</label>
    <span class="helper-bar">
      <input :type="type" class="input" v-bind="$attrs" :name="inputLabel" @input="onInput" />
    </span>
  </div>
</template>

<style scoped>
div.wrapper {
  display: flex;
  justify-content: space-between;
  width: 25rem;
  flex-direction: row;
}

.label {
  text-transform: capitalize;
  font-size: 1.25rem;
}

.input {
  width: 18rem;
  border-radius: 0.25rem;
  border: 1px solid var(--grey-3);
  height: 2rem;
  font-size: 1rem;
  padding-left: 0.5rem;
  transition: box-shadow 0.1s;
  color: var(--grey-1);
}

.input:focus {
  outline: none;
  box-shadow: var(--box-shadow-blue);
}

.helper-bar {
  position: relative;
}

.helper-bar:focus-within::after {
  content: "";
  height: 1px;
  border-radius: 0.25rem;
  background-color: var(--blue-1);
  position: absolute;
  bottom: 0px;
  width: 100%;
  left: 0;
}

.input:hover {
  box-shadow: var(--box-shadow-blue);
}
</style>
