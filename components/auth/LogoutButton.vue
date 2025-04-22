<script lang="ts" setup>
import { signOut } from 'firebase/auth'

const isUser = useUserState()

async function logout() {
  const { $auth } = useNuxtApp()

  await signOut($auth)
  navigateTo('/')
  isUser.value = false
  console.log('😎 ❌ logout...')
}
</script>

<template>
  <UiButton @click="logout">LOGOUT</UiButton>
</template>
