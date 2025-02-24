import { UserResponse } from '@/types/auth';

export const mockUserData: UserResponse = {
  studentId: '22000770',
  studentName: '김철수',
  studentEmail: 'chulsoo.kim@example.com',
  major1: '컴퓨터공학',
  major2: '경영학',
  grade: 3,
  term: 7,
  department: '공과대학',
  currentSemester: '2024-2',
};

export const mockUserDataNew: UserResponse = {
  studentId: '22000770',
  studentName: '김철수',
  studentEmail: 'chulsoo.kim@example.com',
  major1: '컴퓨터공학',
  major2: '경영학',
  grade: 3,
  term: 8,
  department: '공과대학',
  currentSemester: '2025-1',
};
