import type { Meta, StoryObj } from '@storybook/react-vite';

import { useArgs } from 'storybook/internal/preview-api';

import { DEFAULT_SIZE } from '../constants';
import { Switch } from '../ui';

const meta = {
  title: 'shared/Switch',
  component: Switch,
} satisfies Meta<typeof Switch>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default = {
  args: {
    size: DEFAULT_SIZE,
    checked: false,
  },
  render: (args) => {
    const [{ checked }, updateArgs] = useArgs();
    return (
      <Switch
        {...args}
        checked={checked}
        onChange={(event) => updateArgs({ checked: event.target.checked })}
      />
    );
  },
} satisfies Story;
