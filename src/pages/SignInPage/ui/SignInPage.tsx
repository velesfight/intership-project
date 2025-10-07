import { useTranslation, Trans } from 'react-i18next';
import { Link } from 'react-router';

import { Button } from '~/shared/components/Button';
import { Text } from '~/shared/components/Text';
import { TextInput } from '~/shared/components/TextInput';
import { AppRoute } from '~/shared/constants/routes';

import styles from './SignInPage.module.css';

export const SignInPage = () => {
  const { t } = useTranslation();

  return (
    <form className={styles.wrapper}>
      <div className={styles.card}>
        <div className={styles.content}>
          <Text variant='title2' className={styles.label}>
            {t('auth.title.signIn')}
          </Text>
          <TextInput
            label={t('auth.label.email')}
            placeholder={t('auth.placeholder.enterEmail')}
            className={styles.input}
          />
          <TextInput
            label={t('auth.label.password')}
            type='password'
            placeholder={t('auth.placeholder.enterPassword')}
            className={styles.input}
          />
          <div className={styles.container}>
            <Text color='primary' className={styles.recover}>
              <Link to={AppRoute.Recover}>{t('auth.text.forgotPassword')}</Link>
            </Text>
          </div>
          <Button className={styles.button} type='submit' fullWidth>
            {t('auth.button.signIn')}
          </Button>
          <div className={styles.footer}>
            <Text color='content2'>{t('auth.text.noAccount')}</Text>
            <Text color='primary' className={styles.join}>
              <Link to={AppRoute.SignUp}> {t('auth.text.signUp')}</Link>
            </Text>
          </div>
        </div>
      </div>
      <Text variant='caption1' className={styles.agreement} color='content1'>
        <Trans
          i18nKey='auth.text.agreement'
          t={t}
          components={{
            span: <span className={styles.fade} />,
            link1: <Link to='#' className={styles.link} />,
            link2: <Link to='#' className={styles.link} />,
            link3: <Link to='#' className={styles.link} />,
          }}
        />
      </Text>
    </form>
  );
};
