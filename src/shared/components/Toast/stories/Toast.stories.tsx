import { ToastProvider, ToastViewport } from '@radix-ui/react-toast';
import { Meta, StoryObj } from '@storybook/react-vite';

import { Toast } from '../ui';

const meta = {
  title: 'shared/Toast',
  component: Toast,
  argTypes: {
    variant: {
      control: 'select',
      options: ['success', 'failed', 'simpleLike', 'superLike'],
    },
    open: {
      table: { disable: true },
    },
  },
  decorators: [
    (Story) => (
      <div style={{ width: 300 }}>
        <ToastProvider>
          <Story />
          <ToastViewport />
        </ToastProvider>
      </div>
    ),
  ],
} satisfies Meta<typeof Toast>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default = {
  args: {
    variant: 'success',
    text1: 'Данные сохранены',
    text2: '',
    open: true,
  },
} satisfies Story;
