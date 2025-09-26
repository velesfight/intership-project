import { clsx } from 'clsx';
import { FC } from 'react';

import { DEFAULT_SIZE } from '../constants';
import { formatCount } from '../lib';
import { CounterProps } from '../types';
import styles from './Counter.module.css';

export const Counter: FC<CounterProps> = ({ value, size = DEFAULT_SIZE, className, ...props }) => {
  const fixedCounter = formatCount(value);

  return (
    <span className={clsx(styles.counter, styles[size], className)} {...props}>
      {fixedCounter}
    </span>
  );
};
