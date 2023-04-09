import {
  ButtonProps as RNButtonProps,
  TextStyle as RNTextStyle,
  ViewStyle as RNViewStyle,
} from 'react-native';

import {TypeScale} from '~/style';

import type {FontelloIcons} from '../Icon/types';

export type CustomProps = {
  fullWidth?: boolean;
  icon?: FontelloIcons;
  loading?: boolean;
  style?: RNViewStyle;
  variant?:
    | 'filled'
    | 'outlined'
    | 'text'
    | 'elevated'
    | 'tonal'
    | 'error'
    | 'outlinedFilled';
  type?: TypeScale;
  textStyle?: RNTextStyle;
  numberOfLines?: number;
  innerStyle?: RNViewStyle;
};

export type ButtonProps = CustomProps & RNButtonProps;
