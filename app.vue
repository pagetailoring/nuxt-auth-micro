<script lang="ts" setup>
const { isUser, isAuthCheck } = storeToRefs(useUserAuthState())
const isDelay = ref(true)

onMounted(() => {
  setTimeout(() => {
    isDelay.value = false
  }, 5000)
})
</script>

<template>
  <div style="font-family: Tahoma; font-size: 120%; margin-inline: 1rem">
    <h1>Nuxt Auth Firebase micro</h1>

    <AppLoading v-if="!isAuthCheck" />
    <LazyAuthLoginForm v-else-if="!isUser" />
    <template v-else>
      <LazyTheSecretContent />

      <LazyNuxtPage />
    </template>

    <LazyAppConsoleInfo v-if="!isDelay" />
  </div>
</template>
