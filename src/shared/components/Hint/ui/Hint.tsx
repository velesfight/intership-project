import { clsx } from 'clsx';
import { FC } from 'react';

import { Text } from '~/shared/components/Text';

import { DEFAULT_VARIANT, ICON } from '../constants';
import { HintProps } from '../types';
import styles from './Hint.module.css';

export const Hint: FC<HintProps> = ({ variant = DEFAULT_VARIANT, children, ...props }) => {
  const IconComponent = variant !== 'default' ? ICON[variant] : undefined;

  return (
    <div className={styles.block} {...props}>
      {IconComponent && (
        <IconComponent className={clsx(styles.icon, styles[variant])} aria-hidden />
      )}
      <Text variant='caption1' className={styles[variant]}>
        {children}
      </Text>
    </div>
  );
};
