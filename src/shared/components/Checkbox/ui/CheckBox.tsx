import { clsx } from 'clsx';
import { FC, useId } from 'react';

import CheckBoxIcon from '~/shared/assets/icons/checkbox.svg';
import { Hint } from '~/shared/components/Hint';
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
      <label className={styles.container}>
        <input
          id={inputId}
          type='checkbox'
          className='hidden'
          checked={checked}
          disabled={disabled}
          {...props}
        />
        <span
          className={clsx(
            styles.checkbox,
            styles[size],
            invalid && styles.invalid,
            checked && styles.checked,
          )}
        >
          <CheckBoxIcon className={clsx(styles.icon, invalid && styles.invalid)} aria-hidden />
        </span>
        <Text variant='text2'>{label}</Text>
      </label>
      {hint && <Hint variant={invalid ? 'error' : 'default'}>{hint}</Hint>}
    </div>
  );
};
