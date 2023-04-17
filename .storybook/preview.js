import {Provider} from '@ant-design/react-native';
import customTheme from '~/style/antCustomTheme';

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}

export const decorators = [
  Story => {
    return  <Provider theme={customTheme}><Story/></Provider>
  }
];
