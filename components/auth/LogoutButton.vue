<script lang="ts" setup>
import { signOut } from 'firebase/auth'
import { logoutSuccess } from '~/utils/messages'

const isUser = useUserState()

async function logout() {
  const { $auth } = useNuxtApp()

  await signOut($auth)
  navigateTo('/')
  isUser.value = false
  console.log(logoutSuccess)
}
</script>

<template>
  <UiButton @click="logout">LOGOUT</UiButton>
</template>
