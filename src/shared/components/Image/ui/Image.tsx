import * as RadixImage from '@radix-ui/react-avatar';
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
    <RadixImage.Root className={clsx(styles.root, className)} style={style}>
      <RadixImage.Image className={styles.image} {...props} />
      <RadixImage.Fallback className={clsx(styles.fallback, fallbackClassName)}>
        {fallback}
      </RadixImage.Fallback>
    </RadixImage.Root>
  );
};
