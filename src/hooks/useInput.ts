import { useState } from 'react';

const useInput = (initialValue: string = '') => {
  const [value, setValue] = useState(initialValue);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => setValue(e.target.value);

  const reset = () => {
    setValue('');
  };

  return {
    value,
    handleChange,
    reset,
  };
};

export default useInput;
