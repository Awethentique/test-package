import type {ColorValue, ViewStyle} from 'react-native';
import type {Color} from '~/style';

import {fontelloIconSet} from './IconData';

export declare type FontelloIcons = (typeof fontelloIconSet)[number];

export interface IconProps {
  name: FontelloIcons;
  size?: number;
  color?: Color | ColorValue | undefined;
  style?: ViewStyle;
}
