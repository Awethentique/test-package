import React from 'react';
import {FlatList, StyleSheet, Text, View, Platform} from 'react-native';

import {ComponentMeta, ComponentStory} from '@storybook/react';
import {withBackgrounds} from '@storybook/addon-ondevice-backgrounds';
import {backgroundParameters} from '~/shared/backgroundParameters';

import {Icon} from '@components';
import {fontelloIconSet} from './IconData';
import {IconProps} from './types';

export default {
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
} as ComponentMeta<typeof Icon>;

export const Basic = {
  args: {
    name: 'sticker',
  },
  notes: `
     # Icon component using Fontello custom icons
     
     See Fontello All for the fill list.
    `,
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

export const FontelloIconsAll = {
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
