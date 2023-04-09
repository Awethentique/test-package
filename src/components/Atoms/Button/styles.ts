import {ColorValue, StyleSheet} from 'react-native';

import {elevation, useColors} from '~/style';
import {Colors} from '~/style/colors';

import {ButtonProps} from './types';

const getContainerStyles = (colors: Colors) =>
  StyleSheet.create({
    default: {
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      paddingHorizontal: 16,
      height: 40,
      borderRadius: 20,
    },
    filled: {
      backgroundColor: colors.primary,
    },
    fullWidth: {
      height: 60,
    },
    tonal: {
      backgroundColor: colors.secondary,
    },
    error: {
      backgroundColor: colors.error,
    },
    elevated: {
      ...elevation.level1,
      backgroundColor: colors.surface,
    },
    disabled: {
      opacity: 0.3,
    },
    outlined: {
      backgroundColor: colors.surface,
      borderColor: colors.outline,
      borderWidth: 1,
    },
    outlinedFilled: {
      backgroundColor: 'rgba(111, 88, 255, 0.1)',
      color: '#6F58FF',
    },
    outlinedDisabled: {
      borderColor: `${colors.onSurface}1E`,
    },
    text: {
      backgroundColor: undefined,
      paddingHorizontal: undefined,
      height: undefined,
      borderRadius: undefined,
    },
  });

const getTitleStyles = (colors: Colors, title: string, color?: ColorValue) =>
  StyleSheet.create({
    default: {
      marginHorizontal: title ? 8 : 0,
      color: colors.primary,
    },
    filled: {
      color: colors.onPrimary,
    },
    tonal: {
      color: colors.onSecondary,
    },
    error: {
      color: colors.onError,
    },
    color: {
      color,
    },
  });

export const useStyles = ({
  disabled,
  fullWidth,
  variant = 'filled',
  title,
  color,
  innerStyle,
  textStyle,
}: ButtonProps) => {
  const colors = useColors();

  const innerStyles = getContainerStyles(colors);
  const titleStyles = getTitleStyles(colors, title, color);

  return StyleSheet.create({
    inner: StyleSheet.flatten([
      innerStyles.default,
      fullWidth && innerStyles.fullWidth,
      variant === 'filled' && innerStyles.filled,
      variant === 'tonal' && innerStyles.tonal,
      variant === 'error' && innerStyles.error,
      variant === 'elevated' && innerStyles.elevated,
      disabled && innerStyles.disabled,
      variant === 'outlined' && innerStyles.outlined,
      disabled && innerStyles.outlinedDisabled,
      variant === 'text' && innerStyles.text,
      variant === 'outlinedFilled' && innerStyles.outlinedFilled,
      innerStyle && innerStyle,
    ]),
    title: StyleSheet.flatten([
      titleStyles.default,
      variant === 'filled' && titleStyles.filled,
      variant === 'tonal' && titleStyles.tonal,
      variant === 'error' && titleStyles.error,
      !!color && titleStyles.color,
      textStyle && textStyle,
    ]),
  });
};
