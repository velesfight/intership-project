import { clsx } from 'clsx';

import CheckBoxIcon from '~/shared/assets/icons/checkbox.svg';

import { DEFAULT_SIZE } from '../constants';
import { RadioProps } from '../types';
import styles from './Radio.module.css';

export const Radio: React.FC<RadioProps> = ({ size = DEFAULT_SIZE, className, ...props }) => {
  return (
    <>
      <input type='radio' className={styles.input} {...props} />
      <span className={clsx(styles.radio, styles[size], className)}>
        <CheckBoxIcon className={styles.icon} aria-hidden />
      </span>
    </>
  );
};
