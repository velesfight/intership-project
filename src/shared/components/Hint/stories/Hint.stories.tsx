import type { Meta, StoryObj } from '@storybook/react-vite';

import { DEFAULT_VARIANT } from '../constants';
import { Hint } from '../index';

const meta = {
  title: 'Shared/Hint',
  component: Hint,
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['default', 'warning', 'error', 'success'],
      defaultValue: DEFAULT_VARIANT,
    },
  },
} satisfies Meta<typeof Hint>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    variant: 'warning',
    children: 'Это пример текста хинта',
  },
};
