import { Outlet } from 'react-router';

import styles from './AppLayout.module.css';

export const AppLayout = () => {
  return (
    <>
      <div className={styles.topBar} />
      <div className={styles.navigation} />
      <main className={styles.main}>
        <Outlet />
      </main>
    </>
  );
};
