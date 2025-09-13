import { ComponentProps, ReactNode } from 'react';
import { LinkProps } from 'react-router';

export type ButtonVariant =
  | 'primary'
  | 'semiPrimary'
  | 'secondary'
  | 'whitePrimary'
  | 'transparentPrimary'
  | 'transparentGray'
  | 'transparentWhite'
  | 'semiGray';

export type ButtonSize = 'xs' | 'sm' | 'md' | 'lg';
export type ButtonIconSide = 'start' | 'end';
export type ButtonElement = 'button' | 'a' | 'Link';

export interface CommonButtonProps {
  variant?: ButtonVariant;
  size?: ButtonSize;
  icon?: ReactNode;
  iconSide?: ButtonIconSide;
  fullWidth?: boolean;
}

interface ButtonAsButtonProps extends CommonButtonProps, ComponentProps<'button'> {
  as?: 'button';
  loading?: boolean;
}

interface ButtonAsAnchorProps extends CommonButtonProps, ComponentProps<'a'> {
  as: 'a';
}

interface ButtonAsLinkProps extends CommonButtonProps, LinkProps {
  as: 'Link';
}

export type ButtonProps = ButtonAsButtonProps | ButtonAsAnchorProps | ButtonAsLinkProps;
