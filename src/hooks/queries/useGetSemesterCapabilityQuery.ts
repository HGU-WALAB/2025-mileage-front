import { getSemesterCapability } from '@/apis/capability';
import { useAuthStore } from '@/stores';
import { SemesterCapabilityResponse } from '@/types/capability';
import { useQuery } from '@tanstack/react-query';
import { AxiosError } from 'axios';

const useGetSemesterCapabilityQuery = () => {
  const { student } = useAuthStore();
  return useQuery<SemesterCapabilityResponse[], AxiosError>({
    queryKey: ['semesterCapability', student.studentId],
    queryFn: () =>
      getSemesterCapability({
        studentId: student.studentId,
      }),
  });
};

export default useGetSemesterCapabilityQuery;
