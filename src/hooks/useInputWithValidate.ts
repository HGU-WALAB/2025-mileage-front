import { useCallback, useState } from 'react';

const useInputWithValidate = (
  initialValue: string = '',
  validate: (value: string) => string,
) => {
  const [value, setValue] = useState(initialValue);
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const newValue = e.target.value;

      setValue(newValue);
      setErrorMessage(validate(newValue));
    },
    [validate],
  );

  const reset = () => {
    setValue('');
    setErrorMessage('');
  };

  return {
    value,
    errorMessage,
    handleChange,
    reset,
  };
};

export default useInputWithValidate;
