// use `mergeConfig` to recursively merge Vite options
const { mergeConfig } = require('vite')

module.exports = {
  async viteFinal(config, { configType }) {
    // Return a custom config
    // https://github.com/storybookjs/builder-vite#customize-vite-config
    return mergeConfig(config, {
      css: {
        preprocessorOptions: {
          scss: {
            additionalData: `
              @import './src/assets/styles/_spacing.scss';
              @import './src/assets/styles/_colors.scss';
              @import 'include-media';
            `,
          },
        },
      },
    })
  },
  stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
  ],
  framework: '@storybook/vue3',
  core: {
    builder: '@storybook/builder-vite',
  },
  features: {
    storyStoreV7: true,
  },
}
