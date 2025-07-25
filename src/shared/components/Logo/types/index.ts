import { ComponentProps } from 'react';

export type LogoColor = 'brand' | 'gradient';

export interface LogoProps extends ComponentProps<'svg'> {
  color?: LogoColor;
}
