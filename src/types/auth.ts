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
  // TODO: 확인하기
  currentSemester: string;
}
