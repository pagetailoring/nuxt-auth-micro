import { onAuthStateChanged } from 'firebase/auth'
import { defineNuxtPlugin } from '#app'
import { userChecked, noAuthInit } from '~/utils/messages'

export default defineNuxtPlugin(() => {
  const { $auth } = useNuxtApp()
  const isUser = useUserState()
  const isAuthCheck = useUserCheckState()

  if ($auth) {
    onAuthStateChanged($auth, (user) => {
      if (user) {
        console.log(userChecked)
        isUser.value = true
      } else {
        isUser.value = false
      }
    })
  } else {
    console.error(noAuthInit)
  }

  isAuthCheck.value = true
})
