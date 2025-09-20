import type { Meta, StoryObj } from '@storybook/react-vite';

import { DEFAULT_ELEMENT, DEFAULT_VARIANT } from '../constants';
import { Text } from '../ui';

const meta = {
  title: 'shared/Text',
  component: Text,
  argTypes: {
    as: {
      control: { type: 'select' },
      options: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'p', 'span'],
    },
    variant: {
      control: { type: 'select' },
      options: [
        'title1',
        'title2',
        'title3',
        'title4',
        'title5',
        'text1',
        'text2',
        'caption1',
        'button1',
      ],
    },
    color: {
      control: { type: 'select' },
      options: [
        undefined,
        'primary',
        'secondary',
        'content1',
        'content2',
        'content3',
        'white',
        'success',
        'error',
      ],
    },
    weight: {
      control: { type: 'select' },
      options: [undefined, 400, 500, 600, 700],
    },
  },
} satisfies Meta<typeof Text>;

export default meta;

type Story = StoryObj<typeof Text>;

export const Default = {
  args: {
    children: 'Принимая во внимание, что пренебрежение и презрение к правам человека.',
    as: DEFAULT_ELEMENT,
    variant: DEFAULT_VARIANT,
    color: undefined,
    weight: undefined,
  },
} satisfies Story;
