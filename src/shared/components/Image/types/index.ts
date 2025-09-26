import type { AvatarImageProps } from '@radix-ui/react-avatar';

import { ReactNode } from 'react';

export interface ImageProps extends AvatarImageProps {
  fallbackClassName?: string;
  fallback?: ReactNode;
}
