const path = require('path')

module.exports = {
  stories: [
    '../stories/**/*.stories.mdx',
    '../stories/**/*.stories.@(js|jsx|ts|tsx)',
  ],
  addons: ['@storybook/addon-links', '@storybook/addon-essentials'],
  reactOptions: {
    fastRefresh: true,
  },
  webpackFinal: async (config, { configType }) => {
    config.resolve.modules = [path.resolve(__dirname, '../'), 'node_modules']
    return config
  },
}
