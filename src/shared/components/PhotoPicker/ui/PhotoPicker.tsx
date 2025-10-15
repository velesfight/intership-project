import { clsx } from 'clsx';
import { ChangeEvent, FC, useRef } from 'react';
import { useTranslation } from 'react-i18next';

import { Button } from '~/shared/components/Button/';

import { ALLOWED_PHOTO_TYPES_STRING } from '../constants';
import { fileListSchema } from '../model';
import { PhotoPickerProps } from '../types';
import styles from './PhotoPicker.module.css';

export const PhotoPicker: FC<PhotoPickerProps> = ({
  className,
  children,
  onFilesSelected,
  ...inputProps
}) => {
  const { t } = useTranslation();

  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    const fileList = event.target.files;
    if (!fileList || fileList.length === 0) return;

    const result = fileListSchema.safeParse(fileList);
    if (result.success) {
      const { validFiles, errors } = result.data;
      onFilesSelected?.(validFiles, errors);
    } else {
      const errors = result.error.issues.map((issue) => issue.message);
      onFilesSelected?.([], errors);
      event.target.value = '';
    }
  };

  return (
    <div className={clsx(styles.photoPicker, className)}>
      <div className={styles.visualButton}>
        {children || <Button type='button'>{t('shared.text.choosePhoto')}</Button>}
      </div>
      <input
        ref={fileInputRef}
        type='file'
        accept={ALLOWED_PHOTO_TYPES_STRING}
        onChange={handleFileChange}
        aria-label={t('shared.text.choosePhoto')}
        className={styles.fileInput}
        {...inputProps}
      />
    </div>
  );
};
