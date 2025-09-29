import { Meta, StoryObj } from '@storybook/react-vite';
import { MemoryRouter } from 'react-router';

import LockIcon from '~/shared/assets/icons/lock.svg';

import { DEFAULT_SIZE, DEFAULT_VARIANT } from '../constants';
import { IconButton } from '../ui/IconButton';

const meta = {
  title: 'shared/IconButton',
  component: IconButton,
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
        'white',
        'gray',
        'transparentPrimary',
        'transparentGray',
        'transparentWhite',
        'semiGray',
        'semiWhite',
      ],
    },
    size: {
      control: 'select',
      options: ['xs', 'sm', 'md', 'lg', 'xl', 'xxl'],
    },
    disabled: {
      control: 'boolean',
      if: { arg: 'as', eq: 'button' },
    },
  },
} satisfies Meta<typeof IconButton>;

export default meta;
type Story = StoryObj<typeof IconButton>;

export const Default: Story = {
  args: {
    children: <LockIcon />,
    as: 'button',
    variant: DEFAULT_VARIANT,
    size: DEFAULT_SIZE,
    disabled: false,
  },
} satisfies Story;
