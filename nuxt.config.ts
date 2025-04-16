// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ['@nuxt/eslint'],
  devtools: { enabled: true },
  compatibilityDate: '2024-11-01',
  typescript: {
    typeCheck: true,
    strict: true,
  },

  eslint: {
    config: { stylistic: true },
  },
})
