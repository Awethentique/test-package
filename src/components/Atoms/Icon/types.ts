import {ColorValue} from 'react-native';

import {fontelloIconSet} from './IconData';

export declare type FontelloIcons = (typeof fontelloIconSet)[number];

export interface IconProps {
  name: FontelloIcons;
  size?: number;
  color?: ColorValue | undefined;
}
