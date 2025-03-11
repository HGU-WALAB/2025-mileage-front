import { EmptyBoxImg } from '@/assets';
import { Button, Flex, Heading } from '@/components';
import { ROUTE_PATH } from '@/constants/routePath';
import { usePostLogoutMutation } from '@/hooks/queries';
import { useTheme } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const AuthErrorFallback = ({
  resetErrorBoundary,
}: {
  resetErrorBoundary: () => void;
}) => {
  const theme = useTheme();
  const { mutate: logout } = usePostLogoutMutation();
  const navigate = useNavigate();

  const handleLoginRedirect = () => {
    logout();
    resetErrorBoundary();
    navigate(ROUTE_PATH.login);
  };

  return (
    <Flex.Column
      width="100%"
      height="400px"
      gap="1rem"
      justify="center"
      align="center"
    >
      <EmptyBoxImg />
      <Heading
        as="h2"
        style={{
          fontSize: '1rem',
          color: theme.palette.grey300,
          textAlign: 'center',
        }}
      >
        로그인이 필요한 페이지입니다. <br />
        로그인 페이지로 이동하려면 아래 버튼을 클릭하세요.
      </Heading>
      <Button label="로그인 하러가기" onClick={handleLoginRedirect} />
    </Flex.Column>
  );
};

export default AuthErrorFallback;
