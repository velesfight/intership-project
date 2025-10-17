import { useTranslation } from 'react-i18next';
import { Link } from 'react-router';

import ArrowLeftIcon from '~/shared/assets/icons/arrow-left.svg';
import { Button } from '~/shared/components/Button';
import { IconButton } from '~/shared/components/IconButton';
import { Stepper } from '~/shared/components/Stepper';
import { Text } from '~/shared/components/Text';
import { TextInput } from '~/shared/components/TextInput';
import { Route } from '~/shared/constants/routes';

import styles from './ConfirmEmailPage.module.css';

export const ConfirmEmailPage = () => {
  const { t } = useTranslation();

  return (
    <form className={styles.wrapper}>
      <div className={styles.card}>
        <div className={styles.header}>
          <IconButton variant='gray' size='md' as='Link' to={Route.SignUp}>
            <ArrowLeftIcon aria-hidden />
          </IconButton>
          <Text variant='title3'>{t('auth.title.confirmEmail')}</Text>
        </div>
        <div className={styles.info}>
          <Text variant='text1' className={styles.infoText}>
            {t('auth.text.codeSent', { email: `username@gmail.com` })}
          </Text>
          <TextInput
            hint={t('auth.text.timer')}
            label={t('auth.label.code')}
            placeholder='000-000'
            className={styles.input}
          />
          <div className={styles.buttons}>
            <button className={styles.button}>
              <Text className={styles.buttonText}>{t('auth.button.sendAgain')}</Text>
            </button>
            <button className={styles.transparentPrimary}>
              <Text className={styles.buttonText}>{t('auth.button.noCode')}</Text>
            </button>
          </div>
        </div>
        <div className={styles.action}>
          <Button type='submit' fullWidth>
            {t('common.next')}
          </Button>
          <Stepper steps={3} current={2} />
          <div className={styles.footer}>
            <Text variant='text2' color='content2'>
              {t('auth.text.haveAccount')}
            </Text>
            <Text variant='text2' color='primary'>
              <Link to={Route.SignIn}>{t('auth.title.signIn')}</Link>
            </Text>
          </div>
        </div>
      </div>
    </form>
  );
};
