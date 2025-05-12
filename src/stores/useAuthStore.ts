import { STORE_NAME } from '@/constants/storeName';
import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface AuthState {
  isLogin: boolean;
  user: {
    studentId: string;
    studentName: string;
    studentType: string;
    term: number;
  };
  currentSemester: string;
  login: (
    user: {
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
      user: {
        studentId: '',
        studentName: '',
        studentType: '',
        term: 0,
      },
      currentSemester: '',
      login: (user, currentSemester) =>
        set({ isLogin: true, user, currentSemester }),
      logout: () =>
        set({
          isLogin: false,
          user: { studentId: '', studentName: '', studentType: '', term: 0 },
        }),
    }),
    {
      name: STORE_NAME.auth,
    },
  ),
);

export default useAuthStore;
