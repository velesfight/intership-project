import clsx from 'clsx';

import { Radio } from '~/shared/components/Radio';

import { RadioGroupProps, RadioOption } from '../types';
import styles from './RadioGroup.module.css';

export const RadioGroup: React.FC<RadioGroupProps> = ({
  options,
  value,
  onChange,
  orientation = 'vertical',
}) => {
  const radioOptions: RadioOption[] = options;

  const containerClass = clsx(styles.radioGroup, {
    [styles.vertical]: orientation === 'vertical',
    [styles.horizontal]: orientation === 'horizontal',
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onChange(event.target.value);
  };

  return (
    <div className={containerClass} role='radiogroup' aria-orientation={orientation}>
      {radioOptions.map((option) => (
        <Radio
          key={option.value}
          label={option.label}
          value={option.value}
          checked={value === option.value}
          onChange={handleChange}
        />
      ))}
    </div>
  );
};
