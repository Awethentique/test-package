import React from 'react';
import {FlatList, StyleSheet, Text, View, Platform} from 'react-native';

import {Meta, StoryObj} from '@storybook/react';
import {withBackgrounds} from '@storybook/addon-ondevice-backgrounds';
import {backgroundParameters} from '~/shared/backgroundParameters';

import {Icon} from '@components';
import {fontelloIconSet} from './IconData';
import {IconProps} from './types';

const meta: Meta<typeof Icon> = {
  title: 'Atoms/Icon',
  component: Icon,
  argTypes: {
    name: {
      options: fontelloIconSet,
      control: {type: 'select'},
    },
  },
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/Gv87WWZW5B9hYn3HKeBoaW/Pyxis-2?node-id=2%3A133767&t=QQz8ILzyJFrCxFyP-1',
    },
    backgrounds: backgroundParameters,
  },
};

export default meta;
type Story = StoryObj<typeof Icon>;

export const Basic: Story = {
  args: {
    name: 'sticker',
  },
};

const styles = StyleSheet.create({
  listContainer: {
    justifyContent: 'center',
  },
  row: {
    justifyContent: 'space-evenly',
  },
  listItem: {
    flex: 1,
    justifyContent: 'center',
    aspectRatio: 1,
    padding: 8,
    margin: 4,
    borderWidth: 1,
    borderRadius: 4,
    borderColor: '#0000002e',
    alignItems: 'center',
  },
  text: {
    textAlign: 'center',
    marginTop: 4,
  },
});

export const FontelloIconsAll: Story = {
  args: {
    size: 32,
  },
  render: (args: typeof Icon) => {
    return (
      <FlatList
        data={fontelloIconSet}
        contentContainerStyle={styles.listContainer}
        numColumns={Platform.OS === 'web' ? 6 : 3}
        columnWrapperStyle={styles.row}
        renderItem={({item}) => (
          <View style={styles.listItem}>
            <Icon {...args} name={item} />
            <Text style={styles.text}>{item}</Text>
          </View>
        )}
      />
    );
  },
};
