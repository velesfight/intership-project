import { ComponentProps } from 'react';

export type RadioSize = 'sm' | 'md' | 'lg';

export type RadioProps = Omit<ComponentProps<'input'>, 'type'>;
