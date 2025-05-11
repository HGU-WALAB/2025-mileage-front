import { ScholarshipDurationResponse } from '@/pages/ScholarshipApplyPage/types/scholarship';

export const mockScholarshipDuration: ScholarshipDurationResponse = {
  regStart: new Date(new Date().setDate(new Date().getDate())).toString(),
  regEnd: new Date(new Date().setDate(new Date().getDate() + 7)).toString(),
};
