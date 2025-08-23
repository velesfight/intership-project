import ErrorIcon from '~/shared/assets/icons/error.svg';
import SuccessIcon from '~/shared/assets/icons/success.svg';
import WarningIcon from '~/shared/assets/icons/warning.svg';

export const HintVariant: Record<string, React.ComponentType<{ className?: string }> | string> = {
  warning: typeof WarningIcon,
  error: typeof ErrorIcon,
  success: typeof SuccessIcon,
} as const;

export const DEFAULT_VARIANT: string = 'default';
