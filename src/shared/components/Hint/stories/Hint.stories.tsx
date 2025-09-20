import type { Meta, StoryObj } from '@storybook/react-vite';

import { DEFAULT_VARIANT } from '../constants';
import { Hint } from '../index';

const meta = {
  title: 'shared/Hint',
  component: Hint,
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['default', 'warning', 'error', 'success'],
    },
  },
} satisfies Meta<typeof Hint>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default = {
  args: {
    children: 'Это пример текста хинта',
    variant: DEFAULT_VARIANT,
  },
} satisfies Story;
