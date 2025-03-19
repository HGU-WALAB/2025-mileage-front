import { STORE_NAME } from '@/constants/storeName';
import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface AuthState {
  isLogin: boolean;
  student: { studentId: string; studentName: string; studentType: string };
  currentSemester: string;
  login: (
    student: { studentId: string; studentName: string; studentType: string },
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
      },
      currentSemester: '',
      login: (student, currentSemester) =>
        set({ isLogin: true, student, currentSemester }),
      logout: () =>
        set({
          isLogin: false,
          student: { studentId: '', studentName: '', studentType: '' },
        }),
    }),
    {
      name: STORE_NAME.auth,
    },
  ),
);

export default useAuthStore;
