import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface AuthState {
  isLogin: boolean;
  student: { studentId: string; studentName: string };
  currentSemester: string;
  login: (
    student: { studentId: string; studentName: string },
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
      },
      currentSemester: '',
      login: (student, currentSemester) =>
        set({ isLogin: true, student, currentSemester }),
      logout: () =>
        set({ isLogin: false, student: { studentId: '', studentName: '' } }),
    }),
    {
      name: 'auth',
    },
  ),
);

export default useAuthStore;
