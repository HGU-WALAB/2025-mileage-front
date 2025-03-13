import { useFile, useInput, useInputWithValidate } from '@/hooks';
import { usePatchSubmittedMileageMutation } from '@/hooks/queries';
import { useAuthStore } from '@/stores';
import { SubmittedMileageResponse } from '@/types/mileage';
import { validateRequired } from '@/utils/validate';
import { toast } from 'react-toastify';

interface Props {
  item: SubmittedMileageResponse;
  toggleModal: () => void;
}

const useEditMileageForm = ({ item, toggleModal }: Props) => {
  const { student } = useAuthStore();
  const {
    value: description1,
    handleChange: handleDesc1,
    errorMessage: desc1ErrorMessage,
    reset: resetDesc1,
  } = useInputWithValidate(item.description1, validateRequired);
  const {
    value: description2,
    handleChange: handleDesc2,
    reset: resetDesc2,
  } = useInput(item?.description2 ?? undefined);
  const { value: file, handleChange: handleFile, reset: resetFile } = useFile();

  const { mutateAsync: patchSubmittedMileage } =
    usePatchSubmittedMileageMutation();
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
      await patchSubmittedMileage({
        studentId: student.studentId,
        recordId: item.recordId,
        subitemId: item.subitemId,
        description1,
        description2,
        file,
      });
      toggleModal();
      toast.success('마일리지를 수정했습니다!');
      resetForm();
    } catch {
      toast.error('마일리지 수정에 실패했습니다. 다시 시도해주세요');
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

export default useEditMileageForm;
