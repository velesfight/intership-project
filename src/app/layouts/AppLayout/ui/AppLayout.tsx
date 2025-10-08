import { Outlet } from 'react-router';

import { Navigation } from '~/shared/components/Navigation';

import styles from './AppLayout.module.css';

export const AppLayout = () => {
  return (
    <>
      <div className={styles.topBar} />
      <div className={styles.navigation}>
        <Navigation />
      </div>
      <main className={styles.main}>
        <Outlet />
      </main>
    </>
  );
};
