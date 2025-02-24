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
}
