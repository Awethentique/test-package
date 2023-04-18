import type {TextProps as RNTextProps} from 'react-native';

import {Color, TypeScale} from '~/style';

export interface TextProps extends RNTextProps {
  color?: Color;
  type?: TypeScale;
}
