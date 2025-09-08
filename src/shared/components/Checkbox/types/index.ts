import { ComponentProps } from 'react';

export type CheckBoxSize = 'sm' | 'md' | 'lg';

export interface CheckBoxProps extends Omit<ComponentProps<'input'>, 'size'> {
  size?: CheckBoxSize;
  label: string;
  hint?: string;
  invalid?: boolean;
}
