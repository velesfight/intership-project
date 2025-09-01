import { clsx } from 'clsx';
import { FC, useId } from 'react';

import CheckBoxIcon from '~/shared/assets/icons/checkbox.svg';
import { Text } from '~/shared/components/Text';
// TODO: add Hint when it's ready

import { DEFAULT_SIZE } from '../constants';
import { CheckBoxProps } from '../types';
import styles from './CheckBox.module.css';

export const CheckBox: FC<CheckBoxProps> = ({
  size = DEFAULT_SIZE,
  hint,
  children,
  className,
  checked,
  invalid,
  disabled,
  ...props
}) => {
  const classes = clsx(styles.wrapper, className, disabled && styles.disabled);

  return (
    <div className={classes}>
      <label className={styles.checkbox}>
        <input
          id={useId()}
          type='checkbox'
          className={clsx(styles.control, 'hidden')}
          checked={checked}
          disabled={disabled}
          {...props}
        />
        <CheckBoxIcon
          className={clsx(
            styles.icon,
            styles[size],
            invalid && styles.invalid,
            checked && styles.checked,
          )}
          aria-hidden
        />
        <Text variant='text2'>{children}</Text>
      </label>
    </div>
  );
};
