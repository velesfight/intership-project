import type { Meta, StoryObj } from '@storybook/react-vite';

import { Hint } from '../ui/Hint';

const meta = {
  title: 'shared/Hint',
  component: Hint,
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['default', 'warning', 'error', 'success'],
      description: 'Вариант отображения хинта',
    },
    children: {
      description: 'Текст хинта',
    },
  },
  args: {
    variant: 'default',
    children: 'Это пример текста хинта',
  },
} satisfies Meta<typeof Hint>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    variant: 'default',
    children: 'Это пример текста хинта',
  },
};
