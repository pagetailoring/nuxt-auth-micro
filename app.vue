<script lang="ts" setup>
const isUser = useUserState()
</script>

<template>
  <div style="font-family: Tahoma; font-size: 120%; margin-inline: 1rem">
    <h1>Nuxt Auth Firebase micro</h1>
    <LazyAuthLoginForm v-if="!isUser" />
    <LazyTheSecretContent v-else />

    <NuxtPage />
  </div>
</template>
