import { getSemesterCapability } from '@/apis/capability';
import { useAuthStore } from '@/stores';
import { SemesterCapabilityResponse } from '@/types/capability';
import { useQuery } from '@tanstack/react-query';

const useGetSemesterCapabilityQuery = () => {
  const { student } = useAuthStore();
  return useQuery<SemesterCapabilityResponse[]>({
    queryKey: ['semseterCapability', student.studentId],
    queryFn: () =>
      getSemesterCapability({
        studentId: student.studentId,
      }),
    throwOnError: true,
  });
};

export default useGetSemesterCapabilityQuery;
