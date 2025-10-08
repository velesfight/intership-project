import { ToastProps as RadixToastProps } from '@radix-ui/react-toast';

export type ToastVariant = 'success' | 'failed' | 'simpleLike' | 'superLike';
export interface ToastProps extends Omit<RadixToastProps, 'asChild'> {
  variant?: ToastVariant;
  text1: string;
  text2?: string;
}
