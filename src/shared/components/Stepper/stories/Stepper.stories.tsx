import type { Meta, StoryObj } from '@storybook/react-vite';

import { Stepper } from '../ui';

const meta: Meta<typeof Stepper> = {
  title: 'shared/Stepper',
  component: Stepper,
  argTypes: { className: { table: { disable: true } } },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Filled: Story = {
  args: {
    steps: 3,
    current: 2,
    incomplete: true,
  },
};
