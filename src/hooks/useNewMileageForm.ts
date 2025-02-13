import { useFile, useInput, useInputWithValidate } from '@/hooks';
import { usePostNewMileageMutation } from '@/hooks/queries';
import { validateRequired } from '@/utils/validate';

const useNewMileageForm = (semester: string) => {
  const {
    value: description1,
    handleChange: handleDesc1,
    errorMessage: desc1ErrorMessage,
    reset: resetDesc1,
  } = useInputWithValidate('', validateRequired);
  const {
    value: description2,
    handleChange: handleDesc2,
    reset: resetDesc2,
  } = useInput();
  const { value: file, handleChange: handleFile, reset: resetFile } = useFile();

  const { mutateAsync: postNewMileage, isError } = usePostNewMileageMutation();

  const handleSubmit = (
    e: React.FormEvent<HTMLFormElement> | React.MouseEvent<HTMLButtonElement>,
  ) => {
    e.preventDefault();

    if (!isFormComplete()) {
      return;
    }

    submitForm();
  };

  const isFormComplete = () => {
    const errorMessage = validateRequired(description1);

    if (errorMessage) {
      alert(errorMessage);
      return;
    }

    if (desc1ErrorMessage || !description1) {
      return;
    }

    return true;
  };

  const submitForm = async () => {
    try {
      await postNewMileage({
        semester,
        description1,
        description2,
        file,
      });
      resetForm();
      alert('post 성공');
    } catch (error) {
      console.error(error);
    }
  };

  const resetForm = () => {
    resetDesc1();
    resetDesc2();
    resetFile();
  };

  return {
    desc1: {
      value: description1,
      handleChange: handleDesc1,
      errorMessage: desc1ErrorMessage,
      reest: resetDesc1,
    },
    desc2: {
      value: description2,
      handleChange: handleDesc2,
      reest: resetDesc2,
    },
    file: {
      value: file,
      handleChange: handleFile,
      reset: resetFile,
    },
    handleSubmit,
    isError,
  };
};

export default useNewMileageForm;
