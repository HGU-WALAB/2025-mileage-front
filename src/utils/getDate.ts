export const getDate = (stringDate: string) => {
  const date = new Date(stringDate);

  const year = date.getFullYear();
  const month = ('0' + (date.getMonth() + 1)).slice(-2);
  const day = ('0' + date.getDate()).slice(-2);

  return `${year}/${month}/${day}`;
};

export const getFormattedDate = (stringDate: string) => {
  const date = new Date(stringDate);

  const month = ('0' + (date.getMonth() + 1)).slice(-2);
  const day = ('0' + date.getDate()).slice(-2);

  return `${month}월 ${day}일`;
};

export const getFormattedDateFullYear = (stringDate: string) => {
  const date = new Date(stringDate);

  const year = ('0' + date.getFullYear()).slice(-4);
  const month = ('0' + (date.getMonth() + 1)).slice(-2);
  const day = ('0' + date.getDate()).slice(-2);

  return `${year}년 ${month}월 ${day}일`;
};
