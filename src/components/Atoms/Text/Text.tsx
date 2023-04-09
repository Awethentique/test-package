import React, {FC} from 'react';
import {Text as RNText, StyleSheet, TextProps} from 'react-native';

import {Color, typeScale, TypeScale, useColors} from '~/style';

export type Props = TextProps & {
  color?: Color;
  type?: TypeScale;
};

const Text: FC<Props> = ({
  color = 'onSurface',
  style,
  type = 'bodyMedium',
  ...props
}) => {
  const colors = useColors();

  return (
    <RNText
      style={StyleSheet.flatten([
        typeScale[type],
        {color: colors[color]},
        style,
      ])}
      {...props}
    />
  );
};

export default Text;
