import { useGetScholarshipDurationQuery } from '@/hooks/queries';
import { getIsScholarshipDuration } from '@/utils/getIsScholarshipDuration';
import { useMemo } from 'react';

const useScholarshipDuration = () => {
  const { data: scholarshipDuration } = useGetScholarshipDurationQuery();

  const isScholarshipDuration = useMemo(() => {
    if (scholarshipDuration) {
      return getIsScholarshipDuration(
        new Date().toString(),
        scholarshipDuration,
      );
    }
    return false;
  }, [scholarshipDuration]);

  return { scholarshipDuration, isScholarshipDuration };
};

export default useScholarshipDuration;
