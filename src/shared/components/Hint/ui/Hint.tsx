import { clsx } from 'clsx';
import { FC } from 'react';

import { Text } from '~/shared/components/Text';

import { ErrorIcon, SuccessIcon, WarningIcon, DEFAULT_VARIANT } from '../constants';
import { HintProps } from '../types';
import styles from './Hint.module.css';

export const Hint: FC<HintProps> = ({ variant = DEFAULT_VARIANT, children, ...props }) => {
  const IconComponent = {
    warning: WarningIcon,
    success: SuccessIcon,
    error: ErrorIcon,
  }[variant];

  return (
    <div className={styles.block} {...props}>
      {IconComponent && (
        <IconComponent className={clsx(styles.icon, styles[variant])} aria-hidden />
      )}
      <Text variant='text2' className={styles[variant]}>
        {children}
      </Text>
    </div>
  );
};
