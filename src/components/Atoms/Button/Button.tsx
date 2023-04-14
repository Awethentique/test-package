import React from 'react';
import {
  ActivityIndicator,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';

import {Icon, Text} from '@components';

import {useStyles} from './styles';
import type {ButtonProps} from './types';

const Button = (props: ButtonProps) => {
  const styles = useStyles(props);
  const {icon, loading, title, type = 'labelLarge', numberOfLines} = props;

  return (
    <TouchableOpacity accessibilityRole={'button'} {...props}>
      <View style={styles.inner}>
        {!!icon && <Icon name={icon} size={18} color={styles.title.color} />}
        {loading ? (
          <ActivityIndicator color={styles.title.color} />
        ) : (
          <Text
            type={type}
            style={StyleSheet.flatten(styles.title)}
            numberOfLines={numberOfLines}>
            {title}
          </Text>
        )}
      </View>
    </TouchableOpacity>
  );
};

export default Button;
