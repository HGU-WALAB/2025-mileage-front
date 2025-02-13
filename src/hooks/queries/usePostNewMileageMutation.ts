import { postNewMileage } from '@/apis/mileage';
import { useMutation } from '@tanstack/react-query';

const usePostNewMileageMutation = () => {
  return useMutation({
    mutationFn: postNewMileage,
  });
};

export default usePostNewMileageMutation;
