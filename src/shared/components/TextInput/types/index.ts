import { ComponentProps, ReactNode } from 'react';

export type TextInputType = 'text' | 'email' | 'tel' | 'url' | 'number';

export interface TextInputProps extends ComponentProps<'input'> {
  type?: TextInputType;
  label: string;
  hideLabel?: boolean;
  hint?: string;
  endIcon?: ReactNode;
  invalid?: boolean;
}
