import { resolve, dirname } from 'node:path'
import license from 'rollup-plugin-license'
import fs from 'fs-extra'

// Absolute path for the temporary license file
const LICENSE_FILE = resolve(__dirname, 'LICENSES.txt')
// Absolute path for the final public license file
const PUBLIC_LICENSE_FILE = resolve(__dirname, 'public/LICENSES.txt')

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ['@nuxt/eslint', '@nuxtjs/html-validator', 'nuxt-payload-analyzer'],

  ssr: false,
  devtools: { enabled: true },

  app: {
    head: {
      htmlAttrs: { lang: 'en', style: 'color-scheme: dark;' },
      title: 'Nuxt Auth micro',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width,initial-scale=1' },
        {
          name: 'description',
          content: 'A project focused on analyzing bundle size with different tools.',
        },
      ],
    },
  },
  compatibilityDate: '2024-11-01',

  vite: {
    esbuild: {
      // https://esbuild.github.io/api/#legal-comments
      legalComments: 'none', // external | none | inline:default
    },
    build: {
      rollupOptions: {
        plugins: [
          license({
            banner: undefined, // Do not insert license banner into the bundle
            thirdParty: {
              includePrivate: true, // Include private packages as well
              output: LICENSE_FILE, // Generate the license file at the project root
            },
          }),
        ],
      },
    },
  },

  typescript: {
    typeCheck: true,
    strict: true,
  },

  hooks: {
    // After the build process completes
    'build:done': async () => {
      if (process.env.NODE_ENV !== 'development') {
        // Check if the license file was generated
        if (await fs.pathExists(LICENSE_FILE)) {
          // Ensure the public directory exists
          await fs.ensureDir(dirname(PUBLIC_LICENSE_FILE))
          // Move the license file into the public directory
          await fs.move(LICENSE_FILE, PUBLIC_LICENSE_FILE, { overwrite: true })
          console.log('\n\n\n✅ LICENSES.txt moved to public/\n\n\n')
        } else {
          console.warn('\n\n\n❌ LICENSES.txt not found!\n\n\n')
        }
      }
    },
  },

  eslint: { config: { stylistic: true } },
})
