import type { Meta, StoryObj } from '@storybook/react-vite';

import { useState, useEffect } from 'react';

import { RadioGroup } from '../ui';

const options = [
  { value: 'option1', label: 'Мужчина' },
  { value: 'option2', label: 'Женщина' },
];

const meta = {
  title: 'shared/RadioGroup',
  component: RadioGroup,
  argTypes: {
    orientation: {
      control: 'select',
      options: ['vertical', 'horizontal'],
    },
    value: {
      control: 'select',
      options: options.map((option) => option.value),
    },
    options: {
      table: {
        disable: true,
      },
    },
  },
  render: (args) => {
    const [value, setValue] = useState(args.value);
    useEffect(() => {
      setValue(args.value);
    }, [args.value]);

    return <RadioGroup {...args} value={value} onChange={(newValue) => setValue(newValue)} />;
  },
} satisfies Meta<typeof RadioGroup>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default = {
  args: {
    options,
    value: options[0].value,
    orientation: 'vertical',
  },
} satisfies Story;
