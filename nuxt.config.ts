// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ['@nuxt/eslint'],
  devtools: { enabled: true },

  app: {
    head: {
      htmlAttrs: { lang: 'en', style: 'color-scheme: dark;' },
      title: 'Nuxt Auth micro',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width,initial-scale=1' },
        { name: 'description', content: 'A project focused on analyzing bundle size with different tools.' },
      ],
    },
  },
  compatibilityDate: '2024-11-01',
  typescript: {
    typeCheck: true,
    strict: true,
  },
  eslint: { config: { stylistic: true } },
})
