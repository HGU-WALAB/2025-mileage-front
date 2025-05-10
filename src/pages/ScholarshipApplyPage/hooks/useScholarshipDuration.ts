import { useMemo } from 'react';

import { getIsScholarshipDuration } from '../utils/getIsScholarshipDuration';
import { useGetScholarshipDurationQuery } from './useGetScholarshipDurationQuery';

export const useScholarshipDuration = () => {
  const { scholarshipDuration } = useGetScholarshipDurationQuery();

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
