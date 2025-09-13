import type { Meta, StoryObj } from '@storybook/react-vite';

import { MemoryRouter } from 'react-router';

import LockIcon from '~/shared/assets/icons/lock.svg';

import type { ButtonProps } from '../types';

import { DEFAULT_VARIANT, DEFAULT_SIZE, DEFAULT_ICON_SIDE } from '../constants';
import { Button } from '../ui';

const meta: Meta<ButtonProps> = {
  title: 'shared/Button',
  component: Button,
  decorators: [
    (Story) => (
      <MemoryRouter>
        <Story />
      </MemoryRouter>
    ),
  ],
  argTypes: {
    as: {
      control: 'select',
      options: ['button', 'a', 'Link'],
    },
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
    },
    size: {
      control: 'select',
      options: ['xs', 'sm', 'md', 'lg'],
    },
    icon: {
      control: 'select',
      options: [undefined, 'LockIcon'],
      mapping: {
        LockIcon: <LockIcon />,
      },
    },
    iconSide: {
      control: 'inline-radio',
      options: ['start', 'end'],
    },
    loading: {
      control: 'boolean',
      if: { arg: 'as', eq: 'button' },
    },
    disabled: {
      control: 'boolean',
      if: { arg: 'as', eq: 'button' },
    },
  },
};

export default meta;

type Story = StoryObj<ButtonProps>;

export const Default: Story = {
  args: {
    children: 'Зарегистрироваться',
    as: 'button',
    variant: DEFAULT_VARIANT,
    size: DEFAULT_SIZE,
    icon: undefined,
    iconSide: DEFAULT_ICON_SIDE,
    fullWidth: false,
    loading: false,
    disabled: false,
  },
};
