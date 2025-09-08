import type { Meta, StoryObj } from '@storybook/react-vite';

import Succes from '~/shared/assets/icons/success.svg';

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
      options: ['text', 'email', 'search', 'tel', 'url', 'number'],
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
    endIcon: <Succes />,
    disabled: false,
    hideLabel: false,
    invalid: false,
  },
};
