import React from 'react';
import {Platform} from 'react-native';

import {createIconSetFromFontello} from 'react-native-vector-icons';

import type {IconProps} from './types';
import fontelloConfig from '../../../../assets/fonts/config.json';
import iconFont from '../../../../assets/fonts/pyx.ttf';
import {useColors, Color} from '~/style';
import {ColorValue} from 'react-native';

const FontelloIcon = createIconSetFromFontello(fontelloConfig);

if (Platform.OS === 'web') {
  // this will load the fonts for react native web version of storybook
  const iconFontStyles = `@font-face {
    src: url(${iconFont});
    font-family: pyx;
  }`;

  // Create stylesheet
  /* @ts-ignore */
  const style = document.createElement('style');
  style.type = 'text/css';
  if (style.styleSheet) style.styleSheet.cssText = iconFontStyles;
  /* @ts-ignore */ else
    style.appendChild(document.createTextNode(iconFontStyles));

  // Inject stylesheet
  /* @ts-ignore */
  document.head.appendChild(style);
}

const Icon = ({name, size = 24, color, style}: IconProps) => {
  return (
    <FontelloIcon
      name={name}
      size={size}
      // color={colors[color as Color]}
      color={color}
      style={style}
    />
  );
};

export default Icon;
