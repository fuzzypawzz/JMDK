/* eslint-env node */
require('@rushstack/eslint-patch/modern-module-resolution')
module.exports = {
  root: true,

  extends: [
    'plugin:vue/vue3-essential',
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    '@vue/eslint-config-typescript',
    '@vue/eslint-config-prettier',
    'plugin:storybook/recommended',
    'prettier', // Adding "prettier" last makes sure that it overrides other configs
  ],

  // https://eslint.vuejs.org/user-guide/#how-to-use-a-custom-parser
  parser: 'vue-eslint-parser',

  parserOptions: {
    ecmaVersion: 'latest',
    parser: '@typescript-eslint/parser',
  },

  plugins: ['prettier', '@typescript-eslint'],

  rules: {
    quotes: [
      'warn',
      'single',
      {
        allowTemplateLiterals: true,
      },
    ],
  },
}
