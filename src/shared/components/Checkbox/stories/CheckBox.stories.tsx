import type { Meta, StoryObj } from '@storybook/react-vite';

import type { CheckBoxProps } from '../types';

import { DEFAULT_SIZE } from '../constants';
import { CheckBox } from '../ui';

const meta: Meta<CheckBoxProps> = {
  title: 'Shared/CheckBox',
  component: CheckBox,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    children: { control: 'text', defaultValue: 'Я подтверждаю, что мне есть 18 лет' },

    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
      defaultValue: DEFAULT_SIZE,
    },
    hint: { control: 'text', defaultValue: '' },
    disabled: { control: 'boolean' },
    checked: { control: 'boolean' },
    invalid: { control: 'boolean' },
  },
};

export default meta;

type Story = StoryObj<CheckBoxProps>;

export const Default: Story = {
  args: {
    children: 'Я подтверждаю, что мне есть 18 лет',
  },
};

export const WithHint: Story = {
  args: {
    children: 'Я подтверждаю, что мне есть 18 лет',
    hint: 'Вам должно быть 18 лет',
  },
};
