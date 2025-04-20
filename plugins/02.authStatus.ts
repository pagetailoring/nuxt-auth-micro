import { onAuthStateChanged } from 'firebase/auth'
import { defineNuxtPlugin } from '#app'

export default defineNuxtPlugin(() => {
  const { $auth } = useNuxtApp()
  const isUser = useUserState()
  const isAuthCheck = useUserCheckState()

  if ($auth) {
    onAuthStateChanged($auth, (user) => {
      if (user) {
        console.log('✔️😎🔥')
        isUser.value = true
      } else isUser.value = false
    })
  } else {
    console.error('🔥 Firebase Auth is not initialized')
  }

  isAuthCheck.value = true
})
