import React from 'react';

import {ComponentMeta, ComponentStory} from '@storybook/react';

import {Text} from '@components';
import {fontelloIconSet} from '../Icon/IconData';

export default {
  title: 'Atoms/Text',
  component: Text,
  argTypes: {
    icon: {
      options: fontelloIconSet,
      control: {type: 'select'},
    },
  },
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/Gv87WWZW5B9hYn3HKeBoaW/Pyxis-2?node-id=2%3A133256&t=QQz8ILzyJFrCxFyP-1',
    },
  },
} as ComponentMeta<typeof Text>;

export const Basic: ComponentStory<typeof Text> = (args) => <Text {...args} />;

Basic.args = {
  children: 'Test Text',
};
