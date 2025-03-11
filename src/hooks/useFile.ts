import { useState } from 'react';

const useFile = (initialValue: File | null = null) => {
  const [value, setValue] = useState<File | null>(initialValue);

  const handleChange = (e: File) => setValue(e);

  const reset = () => {
    setValue(null);
  };

  return {
    value,
    handleChange,
    reset,
  };
};

export default useFile;
