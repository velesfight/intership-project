import type { Meta, StoryObj } from '@storybook/react-vite';

import { DEFAULT_COLOR } from '../constants';
import { Logo } from '../ui';

const meta = {
  title: 'shared/Logo',
  component: Logo,
  decorators: [
    (Story) => (
      <div style={{ width: 300 }}>
        <Story />
      </div>
    ),
  ],
  argTypes: {
    color: {
      control: 'select',
      options: ['gradient', 'brand'],
    },
  },
} satisfies Meta<typeof Logo>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default = {
  args: {
    color: DEFAULT_COLOR,
  },
} satisfies Story;
