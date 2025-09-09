import { clsx } from 'clsx';
import { FC, useId } from 'react';

import { Hint } from '~/shared/components/Hint';
import { Text } from '~/shared/components/Text';

import { DEFAULT_TYPE } from '../constants';
import { TextInputProps } from '../types';
import styles from './TextInput.module.css';

export const TextInput: FC<TextInputProps> = ({
  label,
  placeholder,
  hint,
  type = DEFAULT_TYPE,
  value,
  invalid,
  hideLabel,
  endIcon,
  disabled,
  className,
  ...props
}) => {
  const classes = clsx(styles.wrapper, className, disabled && styles.disabled);

  const inputId = useId();

  return (
    <div className={classes}>
      <label className={styles.label}>
        <Text className={clsx(hideLabel && 'hidden')}>{label}</Text>
        <div className={clsx(styles.input, invalid && styles.invalid)}>
          <input
            id={inputId}
            type={type}
            value={value}
            className={styles.control}
            disabled={disabled}
            aria-invalid={invalid}
            {...props}
          />
          {endIcon && (
            <span className={styles.icon} aria-hidden>
              {endIcon}
            </span>
          )}
        </div>
      </label>
      {hint && <Hint variant={invalid ? 'error' : 'default'}>{hint}</Hint>}
    </div>
  );
};
