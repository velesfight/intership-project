import { clsx } from 'clsx';
import { FC, useId, useState } from 'react';
import { useTranslation } from 'react-i18next';

import EyeSlash from '~/shared/assets/icons/eye-slash.svg';
import Eye from '~/shared/assets/icons/eye.svg';
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
  const [showPassword, setShowPassword] = useState(false);

  const { t } = useTranslation('shared');
  const inputId = useId();

  const isPassword = type === 'password';
  const PasswordIcon = showPassword ? <Eye /> : <EyeSlash />;
  const inputType = isPassword && showPassword ? 'text' : type;

  const handleClick = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className={classes}>
      <label className={styles.label}>
        <Text className={clsx(hideLabel && 'hidden')}>{label}</Text>
        <div className={clsx(styles.input, invalid && styles.invalid)}>
          <input
            id={inputId}
            type={inputType}
            value={value}
            className={clsx(styles.control, isPassword && styles.password)}
            disabled={disabled}
            aria-invalid={invalid}
            {...props}
          />
          {isPassword ? (
            <button
              onClick={handleClick}
              className={styles.button}
              aria-label={showPassword ? t('button.hidePassword') : t('button.showPassword')}
            >
              <span className={styles.icon}>{PasswordIcon}</span>
            </button>
          ) : (
            endIcon && <span className={styles.icon}>{endIcon}</span>
          )}
        </div>
      </label>
      {hint && <Hint variant={invalid ? 'error' : 'default'}>{hint}</Hint>}
    </div>
  );
};
