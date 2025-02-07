import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface DrawerState {
  isDrawerOpen: boolean;
  setIsDrawerOpen: (isDrawerOpen: boolean) => void;
  toggleDrawer: () => void;
}

const useDrawerStore = create<DrawerState>()(
  persist(
    set => ({
      isDrawerOpen: true,
      setIsDrawerOpen: isDrawerOpen => set({ isDrawerOpen }),
      toggleDrawer: () =>
        set(state => ({
          isDrawerOpen: !state.isDrawerOpen,
        })),
    }),

    {
      name: 'isDrawerOpen',
    },
  ),
);

export default useDrawerStore;
