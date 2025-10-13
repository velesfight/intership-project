import { ComponentProps } from 'react';

export type ProgressVariant = 'white' | 'lightGray';

export interface ProgressProps extends ComponentProps<'progress'> {
  percent: number;
  variant?: ProgressVariant;
  className?: string;
}
