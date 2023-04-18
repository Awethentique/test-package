import {TextStyle as RNTextStyle, ViewStyle as RNViewStyle} from 'react-native';

import type {ButtonProps as AntButtonProps} from '@ant-design/react-native/es/button/index';

import {Color} from '~/style';

import {FontelloIcons} from '../Icon/types';

export type VariantButtonTypes =
  | 'filled'
  | 'outlined'
  | 'text'
  | 'elevated'
  | 'tonal'
  | 'error'
  | 'outlinedFilled';

export interface ButtonProps extends Omit<AntButtonProps, 'type'> {
  testId: string;
  icon: FontelloIcons;
  style?: RNViewStyle;
  fullWidth?: boolean;
  loading?: boolean;
  variant?: VariantButtonTypes;
  numberOfLines?: number;
}

export interface ButtonStyleProps {
  disabled?: boolean | null | undefined;
  title: string;
  fullWidth?: boolean;
  variant?: VariantButtonTypes;
  textStyle?: RNTextStyle;
  innerStyle?: RNViewStyle;
  color?: Color;
}
