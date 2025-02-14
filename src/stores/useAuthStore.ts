import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface AuthState {
  isLogin: boolean;
  user: { studentId: string; studentName: string } | null;
  currentSemester: string | null;
  login: (
    user: { studentId: string; studentName: string },
    currentSemester: string,
  ) => void;
  logout: () => void;
}

const useAuthStore = create<AuthState>()(
  persist(
    set => ({
      isLogin: false,
      user: null,
      currentSemester: null,
      login: (user, currentSemester) =>
        set({ isLogin: true, user, currentSemester }),
      logout: () => set({ isLogin: false, user: null }),
    }),
    {
      name: 'auth',
    },
  ),
);

export default useAuthStore;
