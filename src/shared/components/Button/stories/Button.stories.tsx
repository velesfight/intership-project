import type { Meta, StoryObj } from '@storybook/react-vite';

import { MemoryRouter } from 'react-router';

import LockIcon from '~/shared/assets/icons/lock.svg';

import type { ButtonProps } from '../types';

import { DEFAULT_VARIANT, DEFAULT_SIZE, DEFAULT_ICON_SIDE } from '../constants';
import { Button } from '../ui';

const meta: Meta<ButtonProps> = {
  title: 'Shared/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  decorators: [
    (Story) => (
      <MemoryRouter>
        <Story />
      </MemoryRouter>
    ),
  ],
  argTypes: {
    children: { control: 'text', defaultValue: 'Click' },
    variant: {
      control: 'select',
      options: [
        'primary',
        'semiPrimary',
        'secondary',
        'whitePrimary',
        'transparentPrimary',
        'transparentGray',
        'transparentWhite',
        'semiGray',
      ],
      defaultValue: DEFAULT_VARIANT,
    },
    size: {
      control: 'select',
      options: ['lg', 'md', 'sm', 'xs'],
      defaultValue: DEFAULT_SIZE,
    },
    icon: { control: false },
    iconSide: {
      control: 'inline-radio',
      options: ['start', 'end'],
      defaultValue: DEFAULT_ICON_SIDE,
    },
    as: {
      control: 'select',
      options: ['button', 'a', 'Link'],
      defaultValue: 'button',
    },
    loading: {
      control: 'boolean',
      if: { arg: 'as', eq: 'button' },
    },
    disabled: { control: 'boolean' },
  },
};

export default meta;

type Story = StoryObj<ButtonProps>;

export const PlainTextButton: Story = {
  args: {
    children: 'Зарегистрироваться',
    as: 'button',
  },
};

export const IconButton: Story = {
  args: {
    children: 'Plain text',
    icon: <LockIcon />,
    as: 'button',
  },
};
