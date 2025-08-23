import { FC } from 'react';

import { Text } from '../../Text/ui/Text';
import { HintVariant } from '../constants/index';
import { HintProps } from '../types';
import styles from './Hint.module.css';

export const Hint: FC<HintProps> = ({ variant = 'DEFAULT_VARIANT', children, alt, ...props }) => {
  const IconComponent = HintVariant[variant];
  return (
    <div className={styles.block} {...props}>
      {IconComponent && <IconComponent className={styles.icon} aria-hidden='true' />}
      <Text variant='text2' className={styles[variant]}>
        {children}
      </Text>
    </div>
  );
};
