import {TextStyle as RNTextStyle, ViewStyle as RNViewStyle} from 'react-native';

import type {ButtonProps as AntButtonProps} from '@ant-design/react-native/es/button/index';

// import {TypeScale} from '~/style';

import {FontelloIcons} from '../Icon/types';

export interface ButtonProps extends AntButtonProps {
  testId: string;
  icon: FontelloIcons;
  style?: RNViewStyle;
  // type?: TypeScale;
  textStyle?: RNTextStyle;
  innerStyle?: RNViewStyle;
}
