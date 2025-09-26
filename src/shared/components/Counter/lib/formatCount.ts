export const formatCount = (value: number): string => {
  if (Number.isNaN(value) || value < 0) return '0';

  const intValue = Math.floor(value);

  if (intValue > 99) return '+99';

  return String(intValue);
};
