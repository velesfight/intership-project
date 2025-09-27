import type { Meta, StoryObj } from '@storybook/react-vite';

import { Image } from '../ui';

const meta = {
  title: 'shared/Image',
  component: Image,
  argTypes: {
    fallbackClassName: { table: { disable: true } },
    style: { table: { disable: true } },
    fallback: {
      control: 'select',
      options: [null, 'Custom fallback'],
      mapping: {
        'Custom fallback': (
          <span
            style={{
              display: 'grid',
              placeItems: 'center',
              blockSize: '100%',
              borderRadius: 'inherit',
              background: 'palegreen',
              color: '#444',
              fontSize: 32,
              fontWeight: 500,
            }}
          >
            Custom fallback
          </span>
        ),
      },
    },
  },
} satisfies Meta<typeof Image>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default = {
  args: {
    src: 'https://placehold.co/400x350/lightblue/333',
    alt: 'Test image',
    fallback: null,
  },
} satisfies Story;

export const Styled = {
  args: {
    src: 'https://placehold.co/400x350/lightblue/333',
    alt: 'Test image',
    fallback: 'Custom fallback',
    style: { inlineSize: 400, aspectRatio: 2, borderRadius: 20 },
  },
} satisfies Story;
