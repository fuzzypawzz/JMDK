const path = require('path')

// use `mergeConfig` to recursively merge Vite options
const { loadConfigFromFile, mergeConfig } = require('vite')

module.exports = {
  async viteFinal(config, { configType }) {
    const { config: userConfig } = await loadConfigFromFile(
      path.resolve(__dirname, '../vite.config.ts')
    )

    // Return a custom config
    // https://github.com/storybookjs/builder-vite#customize-vite-config
    // https://github.com/storybookjs/builder-vite/issues/85
    return mergeConfig(config, {
      ...userConfig,
      plugins: [],
    })
  },
  staticDirs: ['../src/JMDK.UI/static'],
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
