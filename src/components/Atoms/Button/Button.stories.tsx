import React from 'react';

import {ComponentMeta, ComponentStory} from '@storybook/react';

import {expect} from '@storybook/jest';
import {within, userEvent, screen} from '@storybook/testing-library';

import {Button} from '@components';
import {fontelloIconSet} from '../Icon/IconData';

export default {
  title: 'Atoms/Button',
  component: Button,
  argTypes: {
    icon: {
      options: fontelloIconSet,
      control: {type: 'select'},
    },
  },
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/Gv87WWZW5B9hYn3HKeBoaW/Pyxis-2?node-id=2%3A138925&t=QQz8ILzyJFrCxFyP-1',
    },
  },
} as ComponentMeta<typeof Button>;

export const Basic: ComponentStory<typeof Button> = (args) => (
  <Button {...args} />
);

Basic.args = {
  title: 'Test Button',
};

export const WithIcon: ComponentStory<typeof Button> = (args) => (
  <Button {...args} />
);

WithIcon.args = {
  title: 'Button with Icon',
  icon: 'sticker',
};
