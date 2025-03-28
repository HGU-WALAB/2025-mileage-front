import { STORE_NAME } from '@/constants/storeName';
import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface AuthState {
  isLogin: boolean;
  student: {
    studentId: string;
    studentName: string;
    studentType: string;
    term: number;
  };
  currentSemester: string;
  login: (
    student: {
      studentId: string;
      studentName: string;
      studentType: string;
      term: number;
    },
    currentSemester: string,
  ) => void;
  logout: () => void;
}

const useAuthStore = create<AuthState>()(
  persist(
    set => ({
      isLogin: false,
      student: {
        studentId: '',
        studentName: '',
        studentType: '',
        term: 0,
      },
      currentSemester: '',
      login: (student, currentSemester) =>
        set({ isLogin: true, student, currentSemester }),
      logout: () =>
        set({
          isLogin: false,
          student: { studentId: '', studentName: '', studentType: '', term: 0 },
        }),
    }),
    {
      name: STORE_NAME.auth,
    },
  ),
);

export default useAuthStore;
