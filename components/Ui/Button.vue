<script lang="ts" setup>
const { type = 'button' } = defineProps<{
  type?: 'button' | 'submit' | 'reset' | undefined
}>()
</script>

<template>
  <button style="padding: 0.5em; margin-block: 1em" :type="type"><slot /></button>
</template>
