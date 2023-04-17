import {Text} from '@components';

import {withBackgrounds} from '@storybook/addon-ondevice-backgrounds';
import {Meta, StoryObj} from '@storybook/react';

import {backgroundParameters} from '~/shared/backgroundParameters';
// import {expect} from '@storybook/jest';
// import {screen, userEvent, within} from '@storybook/testing-library';

const meta: Meta<typeof Text> = {
  title: 'Atoms/Text',
  component: Text,
  decorators: [withBackgrounds],
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
};

export default meta;
type Story = StoryObj<typeof Text>;

export const Basic: Story = {
  args: {
    children: 'Test Text',
  },
};
