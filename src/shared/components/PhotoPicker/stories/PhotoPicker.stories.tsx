import type { Meta, StoryObj } from '@storybook/react-vite';

import { PhotoPicker } from '~/shared/components/PhotoPicker';

const meta = {
  title: 'Shared/PhotoPicker',
  component: PhotoPicker,
  args: {
    multiple: false,
    disabled: false,
  },
  argTypes: {
    onFilesSelected: { action: 'files selected' },
  },
} satisfies Meta<typeof PhotoPicker>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default = {} satisfies Story;

export const CustomUI = {
  args: {
    children: (
      <button
        type='button'
        style={{
          padding: '12px 24px',
          backgroundColor: '#3b82f6',
          color: 'white',
          border: 'none',
          borderRadius: '8px',
          cursor: 'pointer',
          fontSize: '16px',
        }}
      >
        Custom Upload Button
      </button>
    ),
  },
} satisfies Story;
