import { ComponentProps } from 'react';

export type SwitchSize = 'sm' | 'md';

export interface SwitchProps extends Omit<ComponentProps<'input'>, 'size'> {
  size?: SwitchSize;
}
