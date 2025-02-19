import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface AuthState {
  isLogin: boolean;
  student: { studentId: string; studentName: string } | null;
  currentSemester: string | null;
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
      student: null,
      currentSemester: null,
      login: (student, currentSemester) =>
        set({ isLogin: true, student, currentSemester }),
      logout: () => set({ isLogin: false, student: null }),
    }),
    {
      name: 'auth',
    },
  ),
);

export default useAuthStore;
