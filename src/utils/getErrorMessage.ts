import { ERROR_MESSAGES } from '@/constants/errorMessage';

export const getErrorMessage = (statusCode: string) => {
  return ERROR_MESSAGES[statusCode] || ERROR_MESSAGES.default;
};
