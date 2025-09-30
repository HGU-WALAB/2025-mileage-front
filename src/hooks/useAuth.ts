import useAuthStore from '@/stores/useAuthStore';

export const useAuth = () => {
  const { isLogin, user, currentSemester } = useAuthStore();
  
  return {
    isLoggedIn: isLogin,
    user,
    currentSemester,
  };
};
