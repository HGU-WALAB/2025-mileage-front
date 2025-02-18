import { Button } from '@/components';
import { ROUTE_PATH } from '@/constants/routePath';
import { useAuthStore } from '@/stores';
import { useNavigate } from 'react-router-dom';

interface Props {
  error: Error & { response?: { status: number } };
  resetErrorBoundary: () => void;
}

const GlobalErrorFallbackSection = ({ error, resetErrorBoundary }: Props) => {
  const { logout } = useAuthStore();
  const navigate = useNavigate();

  const handleLoginRedirect = () => {
    logout();
    resetErrorBoundary();
    navigate(ROUTE_PATH.login);
  };

  if (error.response?.status === 401) {
    return (
      <div>
        <p>
          로그인이 필요합니다. 로그인 페이지로 이동하려면 아래 버튼을
          클릭하세요.
        </p>
        <button onClick={handleLoginRedirect}>로그인 하러가기</button>
      </div>
    );
  }

  return (
    <div>
      ErrorFallbackSection
      <Button
        label="다시 시도하기"
        size="medium"
        onClick={resetErrorBoundary}
      />
    </div>
  );
};

export default GlobalErrorFallbackSection;
