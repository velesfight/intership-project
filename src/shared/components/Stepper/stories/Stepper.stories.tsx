import type { Meta, StoryObj } from '@storybook/react-vite';

import { Stepper } from '../ui';

const meta = {
  title: 'shared/Stepper',
  component: Stepper,
  argTypes: { className: { table: { disable: true } } },
} satisfies Meta<typeof Stepper>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Filled = {
  args: {
    steps: 3,
    current: 2,
    incomplete: true,
  },
} satisfies Story;
