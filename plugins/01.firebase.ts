import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
import { defineNuxtPlugin } from '#app'

export default defineNuxtPlugin(() => {
  const firebaseConfig = {
    // here put your firebase progect config
    apiKey: 'AIzaSyDHQ2gmL5OMDT4Hlk2_jzCwtkW-JKbMrbE',
    authDomain: 'auth-speed.firebaseapp.com',
    projectId: 'auth-speed',
    storageBucket: 'auth-speed.firebasestorage.app',
    messagingSenderId: '880976206701',
    appId: '1:880976206701:web:f71d31e28a80d0e3185864',
  }

  // Initialize Firebase App
  const app = initializeApp(firebaseConfig)
  const auth = getAuth(app)

  return {
    provide: {
      auth,
    },
  }
})
