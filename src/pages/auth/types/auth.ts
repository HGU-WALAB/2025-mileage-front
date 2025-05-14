export interface AuthRequest {
  accessKey: string;
  token: string;
}

export interface UserResponse {
  studentId: string;
  studentName: string;
  studentEmail: string;
  major1: string;
  major2: string;
  grade: number;
  term: number;
  department: string;
  currentSemester: string;
  modDate: string;
  studentType: StudentType;

  // profile
  imgUrl?: string;
  githubLink?: string;
  blogLink?: string;
  linkedInLink?: string;
  instagramLink?: string;
<<<<<<< HEAD

=======
>>>>>>> 796bdc9 (fix: instagram link 추가 및 skill section UI 변경)
  job?: string;
}

export type StudentType = '전공' | '융합' | '1학년' | '기타';
