import { ComponentProps, ReactNode } from 'react';
import { LinkProps } from 'react-router';

export type IconButtonVariant =
  | 'primary'
  | 'secondary'
  | 'whitePrimary'
  | 'white'
  | 'gray'
  | 'transparentPrimary'
  | 'transparentGray'
  | 'transparentWhite'
  | 'semiGray'
  | 'semiWhite';
export type IconButtonSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl';
export type IconButtonElement = 'button' | 'a' | 'Link';

export interface CommonIconButtonProps {
  variant?: IconButtonVariant;
  size?: IconButtonSize;
  children?: ReactNode;
}

interface IconButtonAsButtonProps extends CommonIconButtonProps, ComponentProps<'button'> {
  as?: 'button';
  loading: boolean;
}

interface IconButtonAsAnchorProps extends CommonIconButtonProps, ComponentProps<'a'> {
  as: 'a';
}

interface IconButtonAsLinkProps extends CommonIconButtonProps, LinkProps {
  as: 'Link';
}

export type IconButtonProps =
  | IconButtonAsButtonProps
  | IconButtonAsAnchorProps
  | IconButtonAsLinkProps;
