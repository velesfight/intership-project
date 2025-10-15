export const ALLOWED_PHOTO_TYPES = [
  'image/jpeg',
  'image/jpg',
  'image/png',
  'image/webp',
  'image/gif',
] as const;
export const ALLOWED_PHOTO_TYPES_STRING = ALLOWED_PHOTO_TYPES.join(', ');
export const ALLOWED_PHOTO_TYPES_DISPLAY = ALLOWED_PHOTO_TYPES.map((type) =>
  type.split('/')[1].toUpperCase(),
).join(', ');
export const ALLOWED_PHOTO_TYPES_SET = new Set<string>(ALLOWED_PHOTO_TYPES);

export const MAX_PHOTO_SIZE_MB = 5;
export const MAX_PHOTO_SIZE_BYTES = MAX_PHOTO_SIZE_MB * 1024 * 1024;

export enum ValidationErrorCode {
  InvalidType = 'invalid_type',
  TooBig = 'too_big',
}
