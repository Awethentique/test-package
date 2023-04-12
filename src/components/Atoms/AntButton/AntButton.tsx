import React, {FC} from 'react';

import {Button as AntMobileButton} from '@ant-design/react-native';
import {Icon} from '@components';
import type {ButtonProps} from './types';

const AntButton = ({
  testId = 'button-test-id',
  size = 'large',
  icon,
  children,
  ...props
}: ButtonProps) => {
  return (
    <AntMobileButton
      {...props}
      size={size}
      testID={testId}
      style={{backgroundColor: 'red'}}>
      {icon && <Icon name={icon} />}
      {children}
    </AntMobileButton>
  );
};

export default AntButton;
