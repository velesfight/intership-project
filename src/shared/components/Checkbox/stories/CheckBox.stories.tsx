import type { Meta, StoryObj } from '@storybook/react-vite';

import { useArgs } from 'storybook/internal/preview-api';

import type { CheckBoxProps } from '../types';

import { DEFAULT_SIZE } from '../constants';
import { CheckBox } from '../ui';

const meta: Meta<CheckBoxProps> = {
  title: 'shared/CheckBox',
  component: CheckBox,
  argTypes: {
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
    },
  },
  render: (args) => {
    const [{ checked }, updateArgs] = useArgs();
    return (
      <CheckBox
        {...args}
        checked={checked}
        onChange={(event) => updateArgs({ checked: event.target.checked })}
      />
    );
  },
};

export default meta;

type Story = StoryObj<CheckBoxProps>;

export const Default: Story = {
  args: {
    label: 'Я подтверждаю, что мне есть 18 лет',
    hint: 'Вам должно быть 18 лет',
    size: DEFAULT_SIZE,
    checked: false,
    invalid: false,
    disabled: false,
  },
};
