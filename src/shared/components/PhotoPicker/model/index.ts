import { z } from 'zod';

import { i18n } from '~/shared/configs/i18n';

import {
  ALLOWED_PHOTO_TYPES_DISPLAY,
  ALLOWED_PHOTO_TYPES_SET,
  MAX_PHOTO_SIZE_BYTES,
  MAX_PHOTO_SIZE_MB,
  ValidationErrorCode,
} from '../constants';

export const fileListSchema = z.instanceof(FileList).transform((fileList, ctx) => {
  const files = [...fileList];
  const result: { validFiles: File[]; errors: string[] } = {
    validFiles: [],
    errors: [],
  };

  files.forEach((file, index) => {
    if (!ALLOWED_PHOTO_TYPES_SET.has(file.type)) {
      const error = i18n.t('notifications.invalidPhotoType.text1', {
        allowedTypes: ALLOWED_PHOTO_TYPES_DISPLAY,
      });
      result.errors.push(error);
      ctx.addIssue({
        code: ValidationErrorCode.InvalidType,
        expected: 'string',
        path: [index],
        message: error,
      });
    } else if (file.size > MAX_PHOTO_SIZE_BYTES) {
      const error = i18n.t('notifications.photoTooLarge.text1', {
        maxSize: MAX_PHOTO_SIZE_MB,
      });
      result.errors.push(error);
      ctx.addIssue({
        code: ValidationErrorCode.TooBig,
        path: [index],
        maximum: MAX_PHOTO_SIZE_BYTES,
        type: 'number',
        origin: 'number',
        inclusive: true,
        message: error,
      });
    } else {
      result.validFiles.push(file);
    }
  });

  return result;
});
