// @ts-check
import withNuxt from './.nuxt/eslint.config.mjs'

export default withNuxt({
  files: ['**/*.ts', '**/*.tsx', '**/*.vue'],
  rules: {
    'no-console': 'off',
    'vue/html-self-closing': 'off',
    'vue/multi-word-component-names': 'off',
  },
})
