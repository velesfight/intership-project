import clsx from 'clsx';
import { FC } from 'react';

import NudeLogo from '~/shared/assets/logos/nudeLogo.svg';
import NudeLogoGradient from '~/shared/assets/logos/nudeLogoGradient.svg';
import { BRAND } from '~/shared/constants';

import { LogoProps } from '../types';
import styles from './Logo.module.css';

export const Logo: FC<LogoProps> = ({ color, className, ...props }) => {
  return color === 'gradient' ? (
    <NudeLogoGradient className={className} role='img' title={BRAND} {...props} />
  ) : (
    <NudeLogo
      className={clsx(className, styles.base, color && styles[color])}
      role='img'
      title={BRAND}
      {...props}
    />
  );
};
