import { getCapability } from '@/apis/capability';
import { useAuthStore } from '@/stores';
import { CapabilityResponse } from '@/types/capability';
import { useQuery } from '@tanstack/react-query';
import { AxiosError } from 'axios';

const useGetCapabilityQuery = () => {
  const { student } = useAuthStore();
  return useQuery<CapabilityResponse[], AxiosError>({
    queryKey: ['capability', student.studentId],
    queryFn: () =>
      getCapability({
        studentId: student.studentId,
      }),
  });
};

export default useGetCapabilityQuery;
