import { clsx } from 'clsx';
import { FC } from 'react';
import { Link } from 'react-router';

import SpinnerIcon from '~/shared/assets/icons/spinner.svg';
import { Text } from '~/shared/components/Text';

import { DEFAULT_VARIANT, DEFAULT_SIZE, DEFAULT_ICON_SIDE } from '../constants';
import { ButtonProps } from '../types';
import styles from './Button.module.css';

export const Button: FC<ButtonProps> = ({
  variant = DEFAULT_VARIANT,
  size = DEFAULT_SIZE,
  icon,
  iconSide = DEFAULT_ICON_SIDE,
  children,
  className,
  ...props
}) => {
  const classes = clsx(styles.button, styles[variant], styles[size], className);
  if (props.as === 'Link') {
    const { as, ...linkProps } = props;
    return (
      <Link {...linkProps} className={classes}>
        {icon && iconSide === 'start' && <span className={styles.icon}>{icon}</span>}
        <Text as='span' className={styles.text}>
          {children}
        </Text>
        {icon && iconSide === 'end' && <span className={styles.icon}>{icon}</span>}
      </Link>
    );
  }

  if (props.as === 'a') {
    const { as, ...anchorProps } = props;
    return (
      <a {...anchorProps} className={classes}>
        {icon && iconSide === 'start' && <span className={styles.icon}>{icon}</span>}
        <Text as='span' className={styles.text}>
          {children}
        </Text>
        {icon && iconSide === 'end' && <span className={styles.icon}>{icon}</span>}
      </a>
    );
  }

  const { as, loading, disabled, ...buttonProps } = props;
  const isDisabled = disabled || loading;
  const btnClasses = clsx(classes, loading && styles.loadingButton);
  return (
    <button {...buttonProps} className={btnClasses} disabled={isDisabled} aria-busy={loading}>
      {icon && iconSide === 'start' && (
        <span className={clsx(styles.icon, loading && styles.hidden)}>{icon}</span>
      )}
      <Text as='span' className={clsx(styles.text, loading && styles.hidden)}>
        {children}
      </Text>
      {icon && iconSide === 'end' && (
        <span className={clsx(styles.icon, loading && styles.hidden)}>{icon}</span>
      )}
      {loading && <SpinnerIcon className={styles.spinner} aria-hidden={true} />}
    </button>
  );
};
