import { clsx } from 'clsx';
import { FC } from 'react';

import { DEFAULT_SIZE } from '../constants';
import { SwitchProps } from '../types';
import styles from './Switch.module.css';

export const Switch: FC<SwitchProps> = ({ checked, size = DEFAULT_SIZE, className, ...props }) => {
  return (
    <label className={clsx(styles.switchLabel, className)}>
      <input
        className={clsx(styles.realSwitch, 'hidden')}
        type='checkbox'
        checked={checked}
        role='switch'
        {...props}
      />
      <span className={clsx(styles.customSwitch, styles[size])} />
    </label>
  );
};
