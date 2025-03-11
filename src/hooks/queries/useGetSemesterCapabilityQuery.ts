import { getSemesterCapability } from '@/apis/capability';
import { useAuthStore } from '@/stores';
import { SemesterCapabilityResponse } from '@/types/capability';
import { useQuery } from '@tanstack/react-query';

const useGetSemesterCapabilityQuery = () => {
  const { student } = useAuthStore();
  return useQuery<SemesterCapabilityResponse[]>({
    queryKey: ['semesterCapability', student.studentId],
    queryFn: () =>
      getSemesterCapability({
        studentId: student.studentId,
      }),
  });
};

export default useGetSemesterCapabilityQuery;
