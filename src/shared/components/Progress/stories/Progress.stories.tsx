import type { Meta, StoryObj } from '@storybook/react-vite';

import { DEFAULT_VARIANT } from '../constants';
import { Progress } from '../ui';

const meta = {
  title: 'shared/Progress',
  component: Progress,
  argTypes: {
    className: { table: { disable: true } },
    variant: {
      control: 'select',
      options: ['white', 'lightGray'],
    },
  },
  decorators: [
    (Story) => (
      <div style={{ width: 400 }}>
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof Progress>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default = {
  args: {
    percent: 44,
    variant: DEFAULT_VARIANT,
  },
} satisfies Story;
