import { ScholarshipDurationResponse } from '@/types/scholarship';

export const mockScholarshipDuration: ScholarshipDurationResponse = {
  regStart: new Date(new Date().setDate(new Date().getDate() + 1)).toString(),
  regEnd: new Date(new Date().setDate(new Date().getDate() + 7)).toString(),
};
