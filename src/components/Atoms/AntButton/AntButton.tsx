import React from 'react';

import {Button as AntMobileButton} from '@ant-design/react-native';
import {Icon, Text} from '@components';

import {useStyles} from './styles';
import type {ButtonProps} from './types';

const AntButton = ({
  testId = 'button-test-id',
  size = 'large',
  icon,
  children,
  ...props
}: ButtonProps) => {
  // const styleProps = {
  //   variant: props.type,

  // }
  // const styles = useStyles(styleProps);

  // const styles = useStyles(props);
  // const AntButton = (props: ButtonProps) => {
  // const {testId = 'button-test-id', size = 'large', icon, children} = props;

  const ButtonText = () => {
    if (icon) {
      return (
        <>
          <Icon name={icon} />
          <Text>{children}</Text>
        </>
      );
    }
    return <Text>{children}</Text>;
  };
  return (
    <AntMobileButton {...props} size={size} testID={testId}>
      {!!icon && <Icon name={icon} />}
      {/* <Icon name="sticker" /> */}
      <Text>{children}</Text>
    </AntMobileButton>
  );
};

export default AntButton;
