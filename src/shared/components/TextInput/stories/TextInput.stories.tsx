import type { Meta, StoryObj } from '@storybook/react-vite';

import { useArgs } from 'storybook/internal/preview-api';

import SuccessIcon from '~/shared/assets/icons/success.svg';

import type { TextInputProps } from '../types';

import { DEFAULT_TYPE } from '../constants';
import { TextInput } from '../ui';

const meta: Meta<TextInputProps> = {
  title: 'shared/TextInput',
  component: TextInput,
  decorators: [
    (Story) => (
      <div style={{ width: 300 }}>
        <Story />
      </div>
    ),
  ],
  argTypes: {
    type: {
      control: 'select',
      options: ['text', 'password', 'email', 'search', 'tel', 'url', 'number'],
    },
    endIcon: {
      control: 'select',
      options: [undefined, 'SuccessIcon'],
      mapping: {
        SuccessIcon: <SuccessIcon />,
      },
    },
  },
  render: (args) => {
    const [{ value }, updateArgs] = useArgs();
    return (
      <TextInput
        {...args}
        value={value}
        onChange={(event) => updateArgs({ value: event.target.value })}
      />
    );
  },
};

export default meta;

type Story = StoryObj<TextInputProps>;

export const Default: Story = {
  args: {
    type: DEFAULT_TYPE,
    label: 'Название поля',
    placeholder: '',
    value: '',
    hint: '',
    endIcon: undefined,
    hideLabel: false,
    invalid: false,
    disabled: false,
  },
};

export const Filled: Story = {
  args: {
    type: DEFAULT_TYPE,
    label: 'Название поля',
    placeholder: 'Введите значение',
    value: 'Введенный текст',
    hint: 'Текст подсказки',
    endIcon: 'SuccessIcon',
    hideLabel: false,
    invalid: false,
    disabled: false,
  },
};
