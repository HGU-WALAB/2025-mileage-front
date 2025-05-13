import { useFileWithType, useInput, useInputWithValidate } from '@/hooks';
import { useAuthStore } from '@/stores';
import { validateRequired } from '@/utils/validate';
import { toast } from 'react-toastify';

import { usePatchSubmittedMileageMutation } from '../hooks/usePatchSubmittedMileageMutation';
import { SubmittedMileageResponse } from '../types/addMileage';

interface Props {
  item: SubmittedMileageResponse;
  toggleModal: () => void;
}

export const useEditMileageForm = ({ item, toggleModal }: Props) => {
  const { user } = useAuthStore();
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
  const {
    value: file,
    handleChange: handleFile,
    reset: resetFile,
  } = useFileWithType('pdf');

  const { patchSubmittedMileage } = usePatchSubmittedMileageMutation();

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

  const submitForm = () => {
    patchSubmittedMileage(
      {
        studentId: user.studentId,
        recordId: item.recordId,
        subitemId: item.subitemId,
        description1,
        description2,
        file,
      },
      {
        onSuccess: () => {
          toggleModal();
        },
      },
    );
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
