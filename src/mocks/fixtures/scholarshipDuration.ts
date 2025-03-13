import { ScholarshipDurationResponse } from '@/types/scholarship';

export const mockScholarshipDuration: ScholarshipDurationResponse = {
  isStart: new Date().toString(),
  isEnd: new Date(new Date().setDate(new Date().getDate() + 7)).toString(),
};
