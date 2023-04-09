import React from 'react';

import {ComponentMeta, ComponentStory} from '@storybook/react';
import {withBackgrounds} from '@storybook/addon-ondevice-backgrounds';
import {backgroundParameters} from '~/shared/backgroundParameters';

import {expect} from '@storybook/jest';
import {within, userEvent, screen} from '@storybook/testing-library';

import {Button} from '@components';
import {fontelloIconSet} from '../Icon/IconData';

export default {
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
} as ComponentMeta<typeof Button>;

export const Basic = {
  args: {
    title: 'Test Button',
  },
  // play: () => userEvent.click(screen.getByText('Test Button')),
};

// Basic.play = async ({args, canvasElement}) => {
//   const canvas = within(canvasElement);
//   await userEvent.click(canvas.getByRole('button'));
//   await expect(args.onPress).toHaveBeenCalled();
// };

export const WithIcon = {
  args: {
    title: 'Button with Icon',
    icon: 'sticker',
  },
};

export const WithIconAlternateBackground = {
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
