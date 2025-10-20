import clsx from 'clsx';
import { ChangeEvent } from 'react';

import { Radio } from '~/shared/components/Radio';
import { Text } from '~/shared/components/Text';

import { DEFAULT_ORIENTATION } from '../constants';
import { RadioGroupProps } from '../types';
import styles from './RadioGroup.module.css';

export const RadioGroup: React.FC<RadioGroupProps> = ({
  options,
  value,
  onChange,
  orientation = DEFAULT_ORIENTATION,
}) => {
  const containerClass = clsx(styles.radioGroup, {
    [styles.vertical]: orientation === 'vertical',
    [styles.horizontal]: orientation === 'horizontal',
  });

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    onChange?.(event.target.value);
  };
  return (
    <div className={containerClass} role='radiogroup' aria-orientation={orientation}>
      {options.map((option) => (
        <label
          key={option.value}
          className={clsx(styles.label, { [styles.active]: value === option.value })}
        >
          <Radio value={option.value} checked={value === option.value} onChange={handleChange} />
          <Text variant='text2'>{option.label}</Text>
        </label>
      ))}
    </div>
  );
};
