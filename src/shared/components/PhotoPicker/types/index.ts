import { ComponentProps } from 'react';

export type PhotoPickerProps = Omit<ComponentProps<'input'>, 'onChange'> & {
  onFilesSelected?: (files: File[], errors: string[]) => void;
};
