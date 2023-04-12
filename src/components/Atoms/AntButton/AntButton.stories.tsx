import type {ComponentMeta, StoryObj} from '@storybook/react';
import {withBackgrounds} from '@storybook/addon-ondevice-backgrounds';
import {backgroundParameters} from '~/shared/backgroundParameters';

import {expect} from '@storybook/jest';
import {within, userEvent, screen} from '@storybook/testing-library';

import {AntButton} from '@components';
import {fontelloIconSet} from '../Icon/IconData';

const meta: ComponentMeta<typeof AntButton> = {
  title: 'Atoms/AntButton',
  component: AntButton,
  decorators: [withBackgrounds],
  argTypes: {
    icon: {
      options: fontelloIconSet,
      control: {type: 'select'},
    },
    type: {
      options: ['primary', 'warning', 'ghost'],
      control: {type: 'select'},
    },
    size: {
      options: ['large', 'small'],
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
type Story = StoryObj<typeof AntButton>;

export const Basic: Story = {
  args: {
    children: 'Button',
    type: 'primary',
  },
  // play: async ({args, canvasElement}) => {
  //   const canvas = within(canvasElement);
  //   const button = canvas.getByRole('button');
  //   await userEvent.click(button);
  // },
};

export const Disabled: Story = {
  args: {
    children: 'Disabled Button',
    type: 'primary',
    disabled: true,
  },
  // play: () => userEvent.click(screen.getByText('Disabled Button')),
};
