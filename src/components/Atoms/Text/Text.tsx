import React from 'react';
import {Text as RNText, StyleSheet} from 'react-native';

import {typeScale, useColors} from '~/style';
import {TextProps} from './types';

const Text = ({
  color = 'onSurface',
  style,
  type = 'bodyMedium',
  children,
  ...props
}: TextProps) => {
  const colors = useColors();

  return (
    <RNText
      style={StyleSheet.flatten([
        typeScale[type],
        {color: colors[color]},
        style,
      ])}
      {...props}>
      {children}
    </RNText>
  );
};

export default Text;
