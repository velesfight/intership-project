import clsx from 'clsx';
import { FC } from 'react';

import { DEFAULT_VARIANT } from '../constants';
import { normalizePercent } from '../lib';
import { ProgressProps } from '../types';
import styles from './Progress.module.css';

export const Progress: FC<ProgressProps> = ({
  percent,
  variant = DEFAULT_VARIANT,
  className,
  ...props
}) => {
  const normalizedPercent = normalizePercent(percent);
  const minWidth = normalizedPercent === 0;

  return (
    <div className={clsx(styles.wrapper, styles[variant], className)}>
      <progress
        className='hidden'
        value={normalizedPercent}
        max={100}
        aria-valuenow={normalizedPercent}
        aria-valuemin={0}
        aria-valuemax={100}
        {...props}
      />
      <div
        className={clsx(styles.fill, { [styles.circle]: minWidth })}
        style={!minWidth ? { inlineSize: `${normalizedPercent}%` } : undefined}
      />
    </div>
  );
};
