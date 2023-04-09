import React from 'react';

import {ComponentMeta, ComponentStory} from '@storybook/react';
import {withBackgrounds} from '@storybook/addon-ondevice-backgrounds';
import {backgroundParameters} from '~/shared/backgroundParameters';

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
    backgrounds: {
      ...backgroundParameters,
      default: 'dark',
    },
  },
} as ComponentMeta<typeof Text>;

export const Basic = {
  args: {
    children: 'Test Text',
  },
};

// const Template: ComponentStory<typeof Text> = (args) => <Text {...args} />;

// export const Basic = Template.bind({});
// Basic.args = {
  // children: 'Test Text',
// };
