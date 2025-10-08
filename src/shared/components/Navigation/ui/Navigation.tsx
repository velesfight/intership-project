import { clsx } from 'clsx';
import { useTranslation } from 'react-i18next';
import { NavLink } from 'react-router';

import { Counter } from '~/shared/components/Counter';
import { Text } from '~/shared/components/Text';

import { NAV_ITEMS_CONFIG } from '../constants';
import styles from './Navigation.module.css';

export const Navigation = () => {
  const { t } = useTranslation();

  return (
    <nav className={styles.navigation}>
      {NAV_ITEMS_CONFIG.map((item) => (
        <NavLink
          key={item.route}
          to={item.route}
          className={({ isActive }) => clsx(styles.navLink, isActive && styles.navLinkActive)}
        >
          <div className={styles.iconContainer}>
            <item.icon aria-hidden className={styles.icon} />
            {item.notifications > 0 && (
              <Counter value={item.notifications} className={styles.counter} />
            )}
          </div>
          <Text className={styles.label}>{t(item.key)}</Text>
        </NavLink>
      ))}
    </nav>
  );
};
