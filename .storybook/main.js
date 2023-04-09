module.exports = {
  stories: ['../src/components/**/*.stories.?(ts|tsx|js|jsx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    'storybook-addon-designs',
    '@storybook/addon-a11y',
    '@storybook/addon-interactions',
    '@storybook/addon-coverage',
    '@storybook/addon-react-native-web',
  ],
  framework: '@storybook/react',
  core: {
    builder: 'webpack5',
  },
};
