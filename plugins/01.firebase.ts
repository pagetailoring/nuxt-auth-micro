import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
import { defineNuxtPlugin } from '#app'
import { updateConfig } from '~/utils/messages'
// import { firebaseConfig } from '~/utils/firebaseConfig.exemple'
import { firebaseConfig } from '~/utils/firebaseConfig'

// Initialize Firebase App

export default defineNuxtPlugin(() => {
  if (firebaseConfig.projectId === 'test') console.log(updateConfig)

  const app = initializeApp(firebaseConfig)
  const auth = getAuth(app)

  return { provide: { auth } }
})
