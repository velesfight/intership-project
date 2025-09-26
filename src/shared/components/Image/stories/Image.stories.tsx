import type { Meta, StoryObj } from '@storybook/react-vite';

import { Image } from '../ui';

const meta = {
  title: 'shared/Image',
  component: Image,
  decorators: [
    (Story) => (
      <div
        style={{
          inlineSize: '400px',
          blockSize: '300px',
          border: '2px dashed #ccc',
        }}
      >
        <Story />
      </div>
    ),
  ],
  argTypes: {
    fallbackClassName: {
      table: {
        disable: true,
      },
    },
    fallback: {
      control: 'select',
      options: [null, 'test'],
      mapping: {
        test: 'test',
      },
    },
  },
} satisfies Meta<typeof Image>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default = {
  args: {
    src: 'https://placehold.co/400x350',
    alt: 'Test image',
    fallback: null,
  },
} satisfies Story;