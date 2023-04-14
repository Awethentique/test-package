import type {ButtonProps as AntButtonProps} from '@ant-design/react-native/es/button/index';

import {FontelloIcons} from '../Icon/types';

export interface ButtonProps extends AntButtonProps {
  testId: string;
  icon: FontelloIcons;
}
