import { clsx } from 'clsx';
import { useId } from 'react';

import CheckBoxIcon from '~/shared/assets/icons/checkbox.svg';
import { Text } from '~/shared/components/Text';

import { DEFAULT_SIZE } from '../constants';
import { RadioProps } from '../types';
import styles from './Radio.module.css';

export const Radio: React.FC<RadioProps> = ({
  size = DEFAULT_SIZE,
  label,
  value,
  checked = false,
  onChange,
}) => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onChange(event);
  };

  const inputId = useId();

  return (
    <label className={`${styles.container} ${checked ? styles.checked : ''}`}>
      <input
        id={inputId}
        type='radio'
        value={value}
        checked={checked}
        onChange={handleChange}
        className='hidden'
      />
      <span className={clsx(styles.radio, styles[size], checked && styles.checked)}>
        <CheckBoxIcon className={styles.icon} />
      </span>
      <Text variant='text2'>{label}</Text>
    </label>
  );
};
