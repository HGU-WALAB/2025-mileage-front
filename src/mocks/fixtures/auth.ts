import profile from '@/assets/imgs/3x4.jpg';
import { UserResponse } from '@auth/types/auth';

export const mockUserData: UserResponse = {
<<<<<<< HEAD
  studentId: '22000770',
  studentName: '최혜림',
  studentEmail: 'HyelimChoi01@gmail.com',
=======
  studentId: '22000000',
  studentName: '홍길동',
  studentEmail: 'eastwest@example.com',
>>>>>>> 796bdc9 (fix: instagram link 추가 및 skill section UI 변경)
  major1: '컴퓨터공학',
  major2: '경영학',
  grade: 3,
  term: 8,
  department: '전산전자공학부',
  currentSemester: '2024-02',
  modDate: new Date().toString(),
  studentType: '전공',

  // profile
<<<<<<< HEAD
  imgUrl: profile,
  githubLink: 'https://github.com/healim01',
  blogLink: 'https://healim01.tistory.com/',
  linkedInLink: 'https://www.linkedin.com/in/hyelim-choi01/',
  instagramLink: 'https://www.instagram.com/hhhhhye_l/',
=======
  imgUrl: '',
  githubLink: 'https://github.com/healim01',
  blogLink: 'https://healim01.tistory.com/',
  linkedInLink: 'https://www.linkedin.com/in/hyelim-choi01/',
  instagramLink: 'https://instagram.com',
>>>>>>> 796bdc9 (fix: instagram link 추가 및 skill section UI 변경)
  job: '프론트엔드',
};
