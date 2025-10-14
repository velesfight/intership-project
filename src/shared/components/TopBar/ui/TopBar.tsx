import { clsx } from 'clsx';
import { useTranslation } from 'react-i18next';
import { NavLink } from 'react-router';

import UserCircleIcon from '~/shared/assets/icons/user-circle.svg';
import { Logo } from '~/shared/components/Logo';
import { Text } from '~/shared/components/Text';
import { BRAND } from '~/shared/constants';
import { Route } from '~/shared/constants/routes';

import styles from './TopBar.module.css';

export const TopBar = () => {
  const { t } = useTranslation();
  return (
    <header className={styles.topbar}>
      <NavLink to={Route.App} className={styles.logo}>
        <Logo />
        <h1 className='hidden'>{BRAND}</h1>
      </NavLink>
      <NavLink
        to={Route.Profile}
        className={({ isActive }) => clsx(styles.profileLink, isActive && styles.active)}
      >
        <UserCircleIcon className={styles.icon} aria-hidden />
        <Text className='hiddenMdDown'>{t(`profile.label.profileLink`)}</Text>
      </NavLink>
    </header>
  );
};
