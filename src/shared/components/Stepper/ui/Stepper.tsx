import { clsx } from 'clsx';
import { FC } from 'react';
import { useTranslation } from 'react-i18next';

import { StepperProps } from '../types';
import styles from './Stepper.module.css';

export const Stepper: FC<StepperProps> = ({ steps, current, incomplete, className, ...props }) => {
  const { t } = useTranslation();
  const lastPassed = current - 1;

  return (
    <div className={clsx(styles.wrapper, className)} {...props}>
      {Array.from({ length: steps }, (_, i) => {
        const isIncomplete = incomplete && i === lastPassed;
        const isPassed = i < current && !isIncomplete;

        return (
          <div key={i} className={clsx(styles.step)}>
            <div
              className={clsx(
                styles.fill,
                isPassed && styles.passed,
                isIncomplete && styles.incomplete,
              )}
            />
            <span className='hidden'>
              {t('shared.label.progress', { current: i + 1, total: steps })}
            </span>
          </div>
        );
      })}
    </div>
  );
};
