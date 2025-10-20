import type { AriaAttributes } from 'react';

export interface RadioOption {
  value: string;
  label: string;
}

export type Orientation = 'horizontal' | 'vertical';

export interface RadioGroupProps extends AriaAttributes {
  options: RadioOption[];
  value: string;
  onChange?: (value: string) => void;
  orientation?: Orientation;
}
