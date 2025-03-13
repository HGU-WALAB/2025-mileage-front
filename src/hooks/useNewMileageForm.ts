import { TOAST_MESSAGES } from '@/constants/toastMessage';
import { useFile, useInput, useInputWithValidate } from '@/hooks';
import { usePostNewMileageMutation } from '@/hooks/queries';
import { useAuthStore } from '@/stores';
import { validateRequired } from '@/utils/validate';
import { toast } from 'react-toastify';

const useNewMileageForm = (
  semester: string,
  subitemId: number,
  toggleModal: () => void,
) => {
  const { student } = useAuthStore();
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

  const { mutateAsync: postNewMileage } = usePostNewMileageMutation();
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
      toast.error(errorMessage);
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
        studentId: student.studentId,
        subitemId,
        semester,
        description1,
        description2,
        file,
      });
      toggleModal();
      toast.success(TOAST_MESSAGES.addMileage);
      resetForm();
    } catch {
      toast.error(TOAST_MESSAGES.failedAddMileage);
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
      reset: resetDesc1,
    },
    desc2: {
      value: description2,
      handleChange: handleDesc2,
      reset: resetDesc2,
    },
    file: {
      value: file,
      handleChange: handleFile,
      reset: resetFile,
    },
    handleSubmit,
  };
};

export default useNewMileageForm;
