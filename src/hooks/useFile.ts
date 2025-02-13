import { useState } from 'react';

const useFile = () => {
  const [value, setValue] = useState<File | null>(null);

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
