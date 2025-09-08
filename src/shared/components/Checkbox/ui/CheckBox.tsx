import { clsx } from 'clsx';
import { FC, useId } from 'react';

import CheckBoxIcon from '~/shared/assets/icons/checkbox.svg';
import { Text } from '~/shared/components/Text';

import { DEFAULT_SIZE } from '../constants';
import { CheckBoxProps } from '../types';
import styles from './CheckBox.module.css';

export const CheckBox: FC<CheckBoxProps> = ({
  size = DEFAULT_SIZE,
  hint,
  label,
  className,
  checked,
  invalid,
  disabled,
  ...props
}) => {
  const classes = clsx(styles.wrapper, className, disabled && styles.disabled);

  const inputId = useId();

  return (
    <div className={classes}>
      <label className={styles.checkbox}>
        <input
          id={inputId}
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
        <Text variant='text2'>{label}</Text>
      </label>
      {/* TODO: add Hint when it's ready */}
    </div>
  );
};
