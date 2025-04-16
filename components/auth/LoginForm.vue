<script lang="ts" setup>
import { signInWithEmailAndPassword } from 'firebase/auth'

const email = ref('')
const password = ref('')

const { $auth } = useNuxtApp()
async function login(email: string, password: string) {
  try {
    await signInWithEmailAndPassword($auth, email, password)
  } catch (e) {
    console.log(e)
  } finally {
    console.log('Login successful')
  }
}

const handleForm = async () => {
  await login(email.value, password.value)
}
</script>

<template>
  <form style="display: grid; max-width: 16rem; gap: 0.5rem" @submit.prevent="handleForm">
    <UiInput
      v-model="email"
      label="Email"
      name="email"
      type="email"
      autocomplete="email"
      required
    />
    <UiInput
      v-model="password"
      label="Password"
      name="password"
      type="password"
      autocomplete="current-password"
      required
    />
    <UiButton type="submit">LOGIN</UiButton>
  </form>
</template>
