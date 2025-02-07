import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export type ThemeMode = 'light' | 'dark' | 'system';

interface ThemeState {
  themeMode: ThemeMode;
  setThemeMode: (mode: ThemeMode) => void;
  toggleTheme: () => void;
}

const useThemeStore = create<ThemeState>()(
  persist(
    set => ({
      themeMode: 'system',
      setThemeMode: themeMode => set({ themeMode }),
      toggleTheme: () =>
        set(state => ({
          themeMode: state.themeMode === 'light' ? 'dark' : state.themeMode === 'dark' ? 'light' : 'light',
        })),
    }),
    {
      name: 'theme',
    },
  ),
);

export default useThemeStore;
