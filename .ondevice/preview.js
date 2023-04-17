import {withBackgrounds} from '@storybook/addon-ondevice-backgrounds';
import {Provider} from '@ant-design/react-native';
import customTheme from '~/style/antCustomTheme';

export const decorators = [withBackgrounds, Story => {
    return  <Provider theme={customTheme}><Story/></Provider>
  }];
export const parameters = {
  actions: {argTypesRegex: '^on[A-Z].*'},
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  backgrounds: [
    {name: 'plain', value: 'white', default: true},
    {name: 'warm', value: 'hotpink'},
    {name: 'cool', value: 'deepskyblue'},
  ],
};
