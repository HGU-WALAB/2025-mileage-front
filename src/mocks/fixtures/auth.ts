import { UserResponse } from '@auth/types/auth';

export const mockUserData: UserResponse = {
  studentId: '22000000',
  studentName: '김한동',
  studentEmail: 'HyelimChoi01@gmail.com',
  major1: '컴퓨터공학',
  major2: '경영학',
  grade: 3,
  term: 8,
  department: '전산전자공학부',
  currentSemester: '2024-02',
  modDate: new Date().toString(),
  studentType: '전공',
};
