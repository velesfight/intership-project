import { Root, Image as RadixImage, Fallback } from '@radix-ui/react-avatar';
import { clsx } from 'clsx';
import { FC } from 'react';

import { ImageProps } from '../types';
import styles from './Image.module.css';

export const Image: FC<ImageProps> = ({
  fallback,
  fallbackClassName,
  className,
  style,
  ...props
}) => {
  return (
    <Root className={clsx(styles.root, className)} style={style}>
      <RadixImage className={styles.image} {...props} />
      <Fallback className={clsx(styles.fallback, fallbackClassName)}>{fallback}</Fallback>
    </Root>
  );
};
