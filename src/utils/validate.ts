import { TOAST_MESSAGES } from '@/constants/toastMessage';

export const validateRequired = (value: string) => {
  return value.length ? '' : TOAST_MESSAGES.requiredField;
};
