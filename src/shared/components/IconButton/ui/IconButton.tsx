import clsx from 'clsx';
import { FC } from 'react';
import { Link } from 'react-router';

import SpinnerIcon from '~/shared/assets/icons/spinner.svg';

import { DEFAULT_SIZE, DEFAULT_VARIANT } from '../constants';
import { IconButtonProps } from '../types';
import styles from './IconButton.module.css';

export const IconButton: FC<IconButtonProps> = ({
  variant = DEFAULT_VARIANT,
  size = DEFAULT_SIZE,
  children,
  className,
  ...props
}) => {
  const classes = clsx(styles.iconButton, styles[variant], styles[size], className);
  const iconClasses = clsx(styles.icon, styles[`${size}Icon`]);

  if (props.as === 'Link') {
    const { as, ...rest } = props;
    return (
      <Link className={classes} {...rest}>
        <span className={iconClasses}>{children}</span>
      </Link>
    );
  }

  if (props.as === 'a') {
    const { as, ...rest } = props;
    return (
      <a className={classes} {...rest}>
        <span className={iconClasses}>{children}</span>
      </a>
    );
  }

  const { as, disabled, loading, ...rest } = props;

  return (
    <button className={classes} disabled={disabled || loading} aria-busy={loading} {...rest}>
      {loading ? (
        <SpinnerIcon className={clsx(iconClasses, styles.spinner)} />
      ) : (
        <span className={iconClasses}>{children}</span>
      )}
    </button>
  );
};
