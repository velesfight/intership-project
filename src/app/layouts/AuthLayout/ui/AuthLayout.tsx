import { useId } from 'react';
import { Link, Outlet } from 'react-router';

import Background from '~/shared/assets/icons/auth-background.svg';
import Logo from '~/shared/assets/logos/nudeLogoGradient.svg';
import { BRAND } from '~/shared/constants';
import { AppRoute } from '~/shared/constants/routes';

import styles from './AuthLayout.module.css';

export const AuthLayout = () => {
  const logoTitleId = useId();

  return (
    <>
      <div className={styles.wrapper}>
        <header className={styles.header}>
          <Link to={AppRoute.Root}>
            <Logo className={styles.logo} role='img' aria-labelledby={logoTitleId}>
              <h1 id={logoTitleId} className='hidden'>
                {BRAND}
              </h1>
            </Logo>
          </Link>
        </header>
        <main className={styles.main}>
          <div className={styles.container}>
            <Outlet />
          </div>
        </main>
      </div>
      <Background className={styles.background} aria-hidden />
    </>
  );
};
