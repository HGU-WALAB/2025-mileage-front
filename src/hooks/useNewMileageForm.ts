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

  const { mutateAsync: postNewMileage, isSuccess } =
    usePostNewMileageMutation();

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
        studentId: student?.studentId ?? '',
        subitemId,
        semester,
        description1,
        description2,
        file,
      });
      toggleModal();
      toast.success('마일리지를 추가했습니다!');
      resetForm();
    } catch {
      toast.error('마일리지 추가에 실패했습니다. 다시 시도해주세요');
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
    isSuccess,
  };
};

export default useNewMileageForm;
