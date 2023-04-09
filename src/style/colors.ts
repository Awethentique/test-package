import {useMemo} from 'react';
import {useColorScheme} from 'react-native';

import palette from '~/style/palette';

export type Colors = {
  primary: string;
  onPrimary: string;
  primaryContainer: string;
  onPrimaryContainer: string;
  secondary: string;
  onSecondary: string;
  secondaryContainer: string;
  onSecondaryContainer: string;
  tertiary: string;
  onTertiary: string;
  tertiaryContainer: string;
  onTertiaryContainer: string;
  error: string;
  onError: string;
  errorContainer: string;
  onErrorContainer: string;
  warning: string;
  onWarning: string;
  warningContainer: string;
  onWarningContainer: string;
  success: string;
  onSuccess: string;
  successContainer: string;
  onSuccessContainer: string;
  background: string;
  onBackground: string;
  surface: string;
  onSurface: string;
  surfaceVariant: string;
  onSurfaceVariant: string;
  outline: string;
  shadow: string;
  inverseSurface: string;
  inverseOnSurface: string;
  inversePrimary: string;
};

export const light: Colors = {
  primary: palette.primary40,
  onPrimary: palette.primary100,
  primaryContainer: palette.primary90,
  onPrimaryContainer: palette.primary10,
  secondary: palette.secondary60,
  onSecondary: palette.secondary100,
  secondaryContainer: palette.secondary90,
  onSecondaryContainer: palette.secondary10,
  tertiary: palette.tertiary40,
  onTertiary: palette.tertiary100,
  tertiaryContainer: palette.tertiary90,
  onTertiaryContainer: palette.tertiary10,
  error: palette.error40,
  onError: palette.error100,
  errorContainer: palette.error90,
  onErrorContainer: palette.error10,
  warning: palette.warning70,
  onWarning: palette.warning100,
  warningContainer: palette.warning90,
  onWarningContainer: palette.warning10,
  success: palette.success60,
  onSuccess: palette.success100,
  successContainer: palette.success90,
  onSuccessContainer: palette.success10,
  background: palette.neutral100,
  onBackground: palette.neutral0,
  surface: palette.neutral99,
  onSurface: palette.neutral10,
  surfaceVariant: palette.neutralVariant90,
  onSurfaceVariant: palette.neutralVariant30,
  outline: palette.neutralVariant50,
  shadow: palette.neutral0,
  inverseSurface: palette.neutral20,
  inverseOnSurface: palette.neutral95,
  inversePrimary: palette.primary80,
};

export const dark: Colors = {
  primary: palette.primary50,
  onPrimary: palette.primary100,
  primaryContainer: palette.primary90,
  onPrimaryContainer: palette.primary10,
  secondary: palette.secondary60,
  onSecondary: palette.secondary20,
  secondaryContainer: palette.secondary30,
  onSecondaryContainer: palette.secondary90,
  tertiary: palette.tertiary40,
  onTertiary: palette.tertiary100,
  tertiaryContainer: palette.tertiary90,
  onTertiaryContainer: palette.tertiary10,
  error: palette.error40,
  onError: palette.error100,
  errorContainer: palette.error90,
  onErrorContainer: palette.error10,
  warning: palette.warning80,
  onWarning: palette.warning20,
  warningContainer: palette.warning30,
  onWarningContainer: palette.warning90,
  success: palette.success60,
  onSuccess: palette.success100,
  successContainer: palette.success90,
  onSuccessContainer: palette.success10,
  background: palette.neutral10,
  onBackground: palette.neutral90,
  surface: palette.neutral10,
  onSurface: palette.neutral80,
  surfaceVariant: palette.neutralVariant30,
  onSurfaceVariant: palette.neutralVariant80,
  outline: palette.neutralVariant60,
  shadow: palette.neutral0,
  inverseSurface: palette.neutral90,
  inverseOnSurface: palette.neutral20,
  inversePrimary: palette.primary40,
};

export const useColors = () => {
  const colorScheme = useColorScheme();

  return useMemo(() => (colorScheme === 'light' ? light : dark), [colorScheme]);
};

export type Color = keyof Colors;

export const COLORS = Object.keys(light) as Color[];
