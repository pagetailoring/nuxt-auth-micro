import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useUserAuthState = defineStore('auth', () => {
  const isUser = ref<boolean | null>(null)
  const isAuthCheck = ref<boolean>(false)

  return { isUser, isAuthCheck }
})
