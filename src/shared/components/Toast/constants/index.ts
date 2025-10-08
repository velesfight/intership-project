import type { FC, SVGProps } from 'react';

import FailedIcon from '~/shared/assets/icons/failed.svg';
import SimpleLikeIcon from '~/shared/assets/icons/like.svg';
import SuccessIcon from '~/shared/assets/icons/success-save.svg';
import SuperLikeIcon from '~/shared/assets/icons/super-like.svg';

import { ToastVariant } from '../types';

export const VARIANT_ICONS: Record<ToastVariant, FC<SVGProps<SVGSVGElement>>> = {
  success: SuccessIcon,
  failed: FailedIcon,
  simpleLike: SimpleLikeIcon,
  superLike: SuperLikeIcon,
};

export const DEFAULT_VARIANT: ToastVariant = 'success';
