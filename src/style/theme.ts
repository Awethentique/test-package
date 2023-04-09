import {useMemo} from 'react';
import {useColorScheme} from 'react-native';

import {Colors, dark, light} from './colors';
import palette, {Palette} from './palette';
import typeScale from './typeScale';

export type Theme = {
  colors: Colors;
  palette: Palette;
  typeScale: typeof typeScale;
};

export const useTheme = (): Theme => {
  const colorScheme = useColorScheme();

  return useMemo(() => {
    const colors = colorScheme === 'light' ? light : dark;

    return {
      colors,
      palette,
      typeScale,
    };
  }, [colorScheme]);
};
