import type { Meta, StoryObj } from '@storybook/react-vite';

import { useArgs } from 'storybook/internal/preview-api';

import { DEFAULT_SIZE } from '../constants';
import { CheckBox } from '../ui';

const meta = {
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
} satisfies Meta<typeof CheckBox>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default = {
  args: {
    label: 'Я подтверждаю, что мне есть 18 лет',
    hint: 'Вам должно быть 18 лет',
    size: DEFAULT_SIZE,
    checked: false,
    invalid: false,
    disabled: false,
  },
} satisfies Story;
