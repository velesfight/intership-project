import { useTranslation, Trans } from 'react-i18next';
import { Link } from 'react-router';

import { Button } from '~/shared/components/Button';
import { CheckBox } from '~/shared/components/Checkbox';
import { Stepper } from '~/shared/components/Stepper';
import { Text } from '~/shared/components/Text';
import { TextInput } from '~/shared/components/TextInput';
import { AppRoute } from '~/shared/constants/routes';
import { usePageTitle } from '~/shared/hooks';

import styles from './SignUpPage.module.css';

export const SignUpPage = () => {
  const { t } = useTranslation();
  usePageTitle(t('auth.title.signUp'));

  return (
    <form className={styles.wrapper}>
      <div className={styles.card}>
        <Text variant='title2' className={styles.label}>
          {t('auth.title.signUp')}
        </Text>
        <TextInput
          label={t('auth.label.email')}
          placeholder={t('auth.placeholder.enterEmail')}
          className={styles.input}
        />
        <TextInput
          hint={t('auth.text.passwordSize')}
          label={t('auth.label.password')}
          type='password'
          placeholder={t('auth.placeholder.enterPassword')}
          className={styles.input}
        />
        <CheckBox className={styles.checkbox} label={t('auth.text.confirmAge')} />
        <Button className={styles.button} type='submit' fullWidth>
          {t('common.next')}
        </Button>
        <Stepper className={styles.stepper} steps={3} current={1} />
        <div className={styles.footer}>
          <Text color='content2'>{t('auth.text.haveAccount')}</Text>
          <Text color='primary'>
            <Link to={AppRoute.SignIn}>{t('auth.button.signIn')}</Link>
          </Text>
        </div>
      </div>
      <Text variant='caption1' className={styles.agreement}>
        <Trans i18nKey='auth.text.agreement' t={t}>
          <Link to='#' className={styles.link} />
          <Link to='#' className={styles.link} />
          <Link to='#' className={styles.link} />
        </Trans>
      </Text>
    </form>
  );
};
