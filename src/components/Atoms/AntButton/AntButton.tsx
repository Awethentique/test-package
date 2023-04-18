import React from 'react';
import {StyleSheet} from 'react-native';

import {Button as AntMobileButton} from '@ant-design/react-native';
import {Icon, Text} from '@components';

import {useStyles} from './styles';
import type {ButtonProps} from './types';

const AntButton = ({
  testId = 'button-test-id',
  disabled,
  size = 'large',
  icon,
  children,
  loading,
  numberOfLines,
  variant,
  ...props
}: ButtonProps) => {
  let variantType: 'primary' | 'ghost' | 'warning' | undefined = 'primary';

  switch (variant) {
    case 'outlined':
    case 'text':
      variantType = 'ghost';
      break;
    case 'error':
      variantType = 'warning';
      break;
    case 'filled':
    case 'elevated':
    case 'outlinedFilled':
    case 'tonal':
    default:
      variantType = 'primary';
      break;
  }
  const styleProps = {
    disabled: disabled,
    fullWidth: props.fullWidth,
    variant,
    title: typeof children === 'string' ? children : '',
  };
  const styles = useStyles(styleProps);
  return (
    <AntMobileButton
      {...props}
      size={size}
      type={variantType}
      loading={loading}
      disabled={disabled}
      testID={testId}
      style={styles.inner}>
      {!loading && icon && (
        <Icon name={icon} size={18} color={styles.title.color} />
      )}
      <Text
        type="labelLarge"
        style={StyleSheet.flatten(styles.title)}
        numberOfLines={numberOfLines}>
        {children}
      </Text>
    </AntMobileButton>
  );
};

export default AntButton;
