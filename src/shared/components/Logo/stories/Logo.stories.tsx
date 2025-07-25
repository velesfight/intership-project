import type { Meta, StoryObj } from '@storybook/react-vite';

import { Logo } from '../ui';

const meta = {
  title: 'shared/Logo',
  component: Logo,
  decorators: [
    (Story) => (
      <div
        style={{
          width: 200,
        }}
      >
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

export const Default: Story = {
  args: {
    color: 'gradient',
  },
};
