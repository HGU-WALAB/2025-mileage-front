import { ERROR_MESSAGES } from '@/constants/errorMessage';
import { useState } from 'react';
import { toast } from 'react-toastify';

type FileTypes = 'pdf' | 'image' | 'video';

const getFileAllowedType = (type: FileTypes): string => {
  if (type === 'pdf') return 'application/pdf';
  if (type === 'image') return 'image/*';
  if (type === 'video') return 'video/*';
  return '';
};

const useFileWithType = (type: FileTypes, initialValue: File | null = null) => {
  const [value, setValue] = useState<File | null>(initialValue);

  const handleChange = (e: File) => {
    const allowedType = getFileAllowedType(type);

    if (
      allowedType === 'application/pdf'
        ? e.type === allowedType
        : e.type.startsWith(allowedType.split('/')[0] + '/')
    ) {
      setValue(e);
    } else {
      toast.error(ERROR_MESSAGES.invalidFileType);
    }
  };

  const reset = () => {
    setValue(null);
  };

  return {
    value,
    handleChange,
    reset,
  };
};

export default useFileWithType;
