<script lang="ts" setup>
import { signInWithEmailAndPassword } from 'firebase/auth'
import { FirebaseError } from 'firebase/app'

const email = ref<string>('')
const password = ref<string>('')
const isSuccess = ref<boolean>(false)
const error = ref<string>('')

watch(error, (val) => {
  if (val) {
    password.value = ''
    setTimeout(() => {
      error.value = ''
    }, 3000)
  }
})

const { $auth } = useNuxtApp()
async function login(email: string, password: string): Promise<void> {
  error.value = ''
  isSuccess.value = false
  try {
    await signInWithEmailAndPassword($auth, email, password)
    isSuccess.value = true
  } catch (err) {
    if (err instanceof FirebaseError) {
      error.value = err.code
      console.log(err.message)
    } else {
      console.log(err)
      error.value = 'Unable to log in'
    }
  } finally {
    if (isSuccess.value) console.log('😎 ✅ login...')
  }
}

const handleForm = async (): Promise<void> => {
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
      placeholder="Email used to sign in"
      autocomplete="email"
      required
    />
    <UiInput
      v-model="password"
      label="Password"
      name="password"
      type="password"
      placeholder="Type your password"
      autocomplete="current-password"
      required
    />
    <UiButton type="submit" :style="{ background: error ? 'darkred' : '' }">
      {{ error || 'LOGIN' }}
    </UiButton>
  </form>
</template>
