import { ComponentProps } from 'react';

export type RadioSize = 'sm' | 'md' | 'lg';

export interface RadioProps extends Omit<ComponentProps<'input'>, 'type' | 'value' | 'name'> {
  value: string;
  label: string;
  checked: boolean;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}
