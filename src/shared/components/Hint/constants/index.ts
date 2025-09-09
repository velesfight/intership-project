import ErrorIcon from '~/shared/assets/icons/error.svg';
import SuccessIcon from '~/shared/assets/icons/success.svg';
import WarningIcon from '~/shared/assets/icons/warning.svg';

import { HintVariant } from '../types';

export { ErrorIcon, SuccessIcon, WarningIcon };

export const DEFAULT_VARIANT: HintVariant = 'default';

export const ICON = {
  warning: WarningIcon,
  success: SuccessIcon,
  error: ErrorIcon,
};
