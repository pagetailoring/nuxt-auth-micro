<script setup lang="ts">
const isAuthCheck = useUserCheckState()
</script>

<template>
  <AppLoading v-if="!isAuthCheck" />
  <LazyAuthLoginForm v-else />
</template>
