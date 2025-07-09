import type { Meta, StoryObj } from '@storybook/react-vite';

import { Text } from '../ui';

const meta: Meta<typeof Text> = {
  title: 'shared/Text',
  component: Text,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: [
        'title1',
        'title2',
        'title3',
        'title4',
        'title5',
        'text1',
        'text2',
        'caption1',
        'button1',
      ],
    },
    color: {
      control: { type: 'select' },
      options: [
        'primary',
        'secondary',
        'content1',
        'content2',
        'content3',
        'white',
        'success',
        'error',
      ],
    },
    weight: {
      control: { type: 'select' },
      options: [400, 500, 600, 700],
    },
    as: {
      control: { type: 'select' },
      options: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'p', 'span'],
    },
  },
};

export default meta;
type Story = StoryObj<typeof Text>;

export const TextDe: Story = {
  args: {
    variant: 'text1',
    children: 'Alle Menschen sind frei und gleich an Würde und Rechten geboren.',
  },
};

export const TextEn: Story = {
  args: {
    variant: 'text1',
    children: 'Whereas disregard and contempt for human rights have resulted.',
  },
};

export const TextEs: Story = {
  args: {
    variant: 'text1',
    children: 'Todos los seres humanos nacen libres e iguales en dignidad y derechos.',
  },
};

export const TextFr: Story = {
  args: {
    variant: 'text1',
    children: 'Tous les êtres humains naissent libres et égaux en dignité et en droits.',
  },
};

export const TextRu: Story = {
  args: {
    variant: 'text1',
    children: 'Принимая во внимание, что пренебрежение и презрение к правам человека.',
  },
};

export const TextZh: Story = {
  args: {
    variant: 'text1',
    children: '任何人不得使为奴隶或奴役 人人生而自由 人人有权享有生命、自由和人身安全.',
  },
};
