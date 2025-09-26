import { ComponentProps } from 'react';

export type CounterSize = 'sm' | 'md' | 'lg';

export interface CounterProps extends ComponentProps<'span'> {
  value: number;
  size?: CounterSize;
}
