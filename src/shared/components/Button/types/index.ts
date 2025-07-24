import { ReactElement, ComponentProps } from 'react';
import { LinkProps as ReactLinkProps } from 'react-router';

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

export interface BaseButtonProps {
  variant?: ButtonVariant;
  size?: ButtonSize;
  icon?: ReactElement;
  iconSide?: ButtonIconSide;
}

interface ButtonElementProps extends ComponentProps<'button'> {
  as?: 'button';
  loading?: boolean;
}

interface AnchorProps extends ComponentProps<'a'> {
  as: 'a';
}

interface LinkProps extends ReactLinkProps {
  as: 'Link';
}

export type ButtonProps = BaseButtonProps & (ButtonElementProps | AnchorProps | LinkProps);
