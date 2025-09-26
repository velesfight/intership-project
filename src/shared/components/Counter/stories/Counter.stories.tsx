import type { Meta, StoryObj } from '@storybook/react-vite';

import { Counter } from '../ui';

const meta = {
  title: 'shared/Counter',
  component: Counter,
} satisfies Meta<typeof Counter>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default = {
  args: {
    value: 0,
    size: 'sm',
  },
} satisfies Story;
