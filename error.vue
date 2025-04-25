<script setup lang="ts">
import type { NuxtError } from '#app'

defineProps<{ error: NuxtError }>()

const handleError = () => {
  clearError({ redirect: '/' })
}

onBeforeMount(() => {
  console.clear()
  nextTick(() => handleError())
  console.log('redirect 🚀')
})
</script>

<template>
  <div style="padding: 1rem; opacity: 0.8">
    <NuxtLink to="/" aria-label="go home page" style="font-size: 1.333em">
      <span class="action"> &larr; </span> <span> {{ error.statusCode }}</span>
    </NuxtLink>
    <p style="padding-left: 1em">
      {{ error.message }}
    </p>
  </div>
</template>
