
module.exports = {
  stories: [
    // '../src/**/*.mdx',
    '../src/components/**/*.stories.?(ts|tsx|js|jsx)'
  ],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    'storybook-addon-designs',
    // '@storybook/addon-docs',
    '@storybook/addon-a11y',
    '@storybook/addon-interactions',
    '@storybook/addon-coverage',
    '@storybook/addon-react-native-web',
  ],
  features: {
    interactionsDebugger: true,
  },
  framework: '@storybook/react',
  // webpackFinal: async (config, { configType }) => {
  //   // `configType` has a value of 'DEVELOPMENT' or 'PRODUCTION'
  //   // You can change the configuration based on that.
  //   // 'PRODUCTION' is used when building the static version of storybook.
  //   // Make whatever fine-grained changes you need
  //   config.module.rules.push({
  //     test: /\.less$/,
  //     use: [
  //       "style-loader",
  //       "css-loader",
  //       "sass-loader",
  //       {
  //         loader: "less-loader",
  //         // compiles Less to CSS
  //         options: {
  //           lessOptions: {
  //             // If you are using less-loader@5 please spread the lessOptions to options directly
  //             //  modifyVars: themeVariables,
  //             javascriptEnabled: true,
  //             sourceMap: true,
  //           },
  //         },
  //       },
  //     ],
  //   }); // Return the altered config

  //   return config;
  // },
  core: {
    builder: 'webpack5',
  },
};
