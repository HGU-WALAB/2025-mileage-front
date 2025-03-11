import { getCapability } from '@/apis/capability';
import { useAuthStore } from '@/stores';
import { CapabilityResponse } from '@/types/capability';
import { useQuery } from '@tanstack/react-query';

const useGetCapabilityQuery = () => {
  const { student } = useAuthStore();
  return useQuery<CapabilityResponse[]>({
    queryKey: ['capability', student.studentId],
    queryFn: () =>
      getCapability({
        studentId: student.studentId,
      }),
  });
};

export default useGetCapabilityQuery;
