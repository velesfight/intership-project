import type { FC } from 'react';

import * as RadixToast from '@radix-ui/react-toast';
import { clsx } from 'clsx';
import { motion } from 'motion/react';
import { useTranslation } from 'react-i18next';

import CloseIcon from '~/shared/assets/icons/close.svg';
import { Text } from '~/shared/components/Text';

import { DEFAULT_VARIANT, VARIANT_ICONS } from '../constants';
import { ToastProps } from '../types';
import styles from './Toast.module.css';

export const Toast: FC<ToastProps> = ({
  variant = DEFAULT_VARIANT,
  text1,
  text2,
  className,
  ...props
}) => {
  const { t } = useTranslation();
  const Icon = VARIANT_ICONS[variant];
  const iconVariantClass = styles[`${variant}Icon`];

  return (
    <RadixToast.Root {...props} asChild>
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        className={clsx(styles.container, styles[variant], className)}
      >
        <div className={styles.iconWrapper}>
          <Icon aria-hidden className={clsx(styles.icon, styles.iconContainer, iconVariantClass)} />
        </div>
        <div className={styles.textWrapper}>
          <RadixToast.Title asChild>
            <Text variant='text1'>{text1}</Text>
          </RadixToast.Title>
          {text2 && (
            <RadixToast.Description asChild>
              <Text variant='text2'>{text2}</Text>
            </RadixToast.Description>
          )}
        </div>
        <RadixToast.Close aria-label={t('common.close')} className={styles.iconClose}>
          <CloseIcon aria-hidden className={styles.iconCloseSvg} />
        </RadixToast.Close>
      </motion.div>
    </RadixToast.Root>
  );
};
