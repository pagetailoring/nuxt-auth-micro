<script setup lang="ts">
defineProps<{
  label?: string
  name: string
}>()
const modelValue = defineModel<string>()
</script>

<template>
  <div style="display: grid; gap: 0.3em">
    <label :for="name">
      <span>{{ label ? label : name }}:</span>
    </label>
    <input
      v-bind="$attrs"
      :id="name"
      v-model="modelValue"
      :name
      style="font-size: 1em; padding: 0.2em"
    />
  </div>
</template>
