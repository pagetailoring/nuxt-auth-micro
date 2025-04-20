<script setup lang="ts">
import { defineAsyncComponent } from 'vue'

const isUser = useUserState()

// Lazy imports APP with routing only for authenticated users
const NuxtApp = defineAsyncComponent(() => import('@/components/app/Main.vue'))
const LoginApp = defineAsyncComponent(() => import('@/components/app/Login.vue'))
</script>

<template>
  <div style="font-family: Tahoma; font-size: 120%; margin-inline: 1rem">
    <h1>Nuxt Auth Firebase micro</h1>

    <component :is="isUser ? NuxtApp : LoginApp" />
  </div>
</template>
