import type { Meta, StoryObj } from '@storybook/react-vite';

import Success from '~/shared/assets/icons/success.svg';

import type { TextInputProps } from '../types';

import { TextInput } from '../ui';

const meta: Meta<TextInputProps> = {
  title: 'Shared/TextInput',
  component: TextInput,
  parameters: {
    layout: 'centered',
  },
  decorators: [
    (Story) => (
      <div style={{ width: '300px' }}>
        <Story />
      </div>
    ),
  ],
  argTypes: {
    type: {
      control: 'select',
      options: ['text', 'email', 'search', 'tel', 'url', 'number', 'password'],
      defaultValue: 'text',
    },
  },
};

export default meta;

type Story = StoryObj<TextInputProps>;

export const Default: Story = {
  args: {
    label: 'Название поля',
    type: 'email',
    value: 'username@gmail.com',
    placeholder: 'Введите значение',
    hint: 'Hint',
    endIcon: <Success />,
    disabled: false,
    hideLabel: false,
    invalid: false,
  },
};

export const Password: Story = {
  args: {
    label: 'Пароль',
    type: 'password',
    value: 'password',
    placeholder: 'Введите пароль',
    hint: 'Hint',
    disabled: false,
    hideLabel: false,
    invalid: false,
  },
};
