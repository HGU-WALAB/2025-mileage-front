import { UserResponse } from '@/types/auth';

export const mockUserData: UserResponse = {
  studentId: '22000770',
  studentName: '최혜림',
  studentEmail: 'chulsoo.kim@example.com',
  major1: '컴퓨터공학',
  major2: '경영학',
  grade: 3,
  term: 10,
  department: '전산전자공학부',
  currentSemester: '2025-01',
  modDate: new Date().toString(),
  studentType: '전공',

  // profile
  imgUrl: 'https://img.segye.com/content/image/2019/05/22/20190522511197.jpg',
  githubLink: 'https://github.com/healim01',
  blogLink: 'https://healim01.tistory.com/',
  linkedInLink: 'https://www.linkedin.com/in/hyelim-choi01/',
  job: '프론트엔드',
};
