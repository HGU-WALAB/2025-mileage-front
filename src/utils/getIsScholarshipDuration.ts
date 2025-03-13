import { ScholarshipDurationResponse } from '@/types/scholarship';

export const getIsScholarshipDuration = (
  today: string,
  scholarshipDuration: ScholarshipDurationResponse,
) => {
  const { isStart, isEnd } = scholarshipDuration;

  return (
    new Date(isStart) <= new Date(today) && new Date(today) <= new Date(isEnd)
  );
};
