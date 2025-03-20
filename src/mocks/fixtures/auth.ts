import { UserResponse } from '@/types/auth';

export const mockUserData: UserResponse = {
  studentId: '22000770',
  studentName: '최혜림',
  studentEmail: 'chulsoo.kim@example.com',
  major1: '컴퓨터공학',
  major2: '경영학',
  grade: 3,
  term: 7,
  department: '전산전자공학부',
  currentSemester: '2025-01',
  modDate: new Date().toString(),
  studentType: '전공',
};
