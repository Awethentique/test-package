import React from 'react';

import {Meta, StoryObj} from '@storybook/react';
import {withBackgrounds} from '@storybook/addon-ondevice-backgrounds';
import {backgroundParameters} from '~/shared/backgroundParameters';

// import {expect} from '@storybook/jest';
// import {within, userEvent, screen} from '@storybook/testing-library';

import {Button} from '@components';
import {fontelloIconSet} from '../Icon/IconData';

const meta: Meta<typeof Button> = {
  title: 'Atoms/Button',
  component: Button,
  decorators: [withBackgrounds],
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
    backgrounds: backgroundParameters,
  },
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Basic: Story = {
  args: {
    title: 'Test Button',
  },
  // play: async ({args, canvasElement}) => {
  //   const canvas = within(canvasElement);
  //   const button = canvas.getByRole('button');
  //   await userEvent.click(button);
  // },
};

export const WithIcon: Story = {
  args: {
    title: 'Button with Icon',
    icon: 'sticker',
  },
};

export const WithIconAlternateBackground: Story = {
  args: {
    title: 'Button with Icon',
    icon: 'sticker',
  },
  parameters: {
    backgrounds: {
      ...backgroundParameters,
      default: 'dark',
    },
  },
};
