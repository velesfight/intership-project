import clsx from 'clsx';
import { FC } from 'react';
import { Link } from 'react-router';

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

  if (props.as === 'Link') {
    const { as, ...rest } = props;
    return (
      <Link className={classes} {...rest}>
        {children}
      </Link>
    );
  }

  if (props.as === 'a') {
    const { as, ...rest } = props;
    return (
      <a className={classes} {...rest}>
        {children}
      </a>
    );
  }

  const { as, disabled, ...rest } = props;

  return (
    <button className={classes} disabled={disabled} {...rest}>
      {children}
    </button>
  );
};
