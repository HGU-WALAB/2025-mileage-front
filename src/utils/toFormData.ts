// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const toFormData = <T extends Record<string, any>>(formValues: T) => {
  const data = new FormData();

  Object.entries(formValues).forEach(([key, value]) => {
    if (value === undefined || value === null) return;

    if (value instanceof FileList) {
      if (value.length > 0) data.append(key, value[0]);
    } else if (Array.isArray(value)) {
      data.append(key, JSON.stringify({ [key]: value }));
    } else {
      data.append(key, String(value));
    }
  });

  return data;
};
