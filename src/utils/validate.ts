export const validateRequired = (value: string) => {
  return value.length ? '' : '필수 항목을 입력해주세요';
};
