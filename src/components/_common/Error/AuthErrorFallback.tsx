import { LogoIcon } from '@/assets';
import { Button, Heading, Modal } from '@/components';
import { ROUTE_PATH } from '@/constants/routePath';
import { useOpenModal } from '@/hooks';
import { usePostLogoutMutation } from '@/hooks/queries';
import { useTheme } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const AuthErrorFallback = ({
  resetErrorBoundary,
}: {
  resetErrorBoundary: () => void;
}) => {
  const theme = useTheme();
  const { open, toggleModal } = useOpenModal(true);

  const { mutate: logout } = usePostLogoutMutation();
  const navigate = useNavigate();

  const handleLoginRedirect = () => {
    logout();
    resetErrorBoundary();
    navigate(ROUTE_PATH.login);
  };

  return (
    <Modal
      open={open}
      toggleModal={toggleModal}
      size="medium"
      style={{
        backgroundColor: theme.palette.background.default,
      }}
    >
      <Modal.Body
        position="center"
        style={{
          margin: '2rem auto',
          gap: '2rem',
        }}
      >
        <LogoIcon width="100px" height="100px" />
        <Heading
          as="h2"
          style={{
            fontSize: '1rem',
            textAlign: 'center',
          }}
        >
          로그인이 필요한 페이지입니다. <br />
          로그인 페이지로 이동하려면 아래 버튼을 클릭하세요.
        </Heading>
        <Button
          label="로그인 하러가기"
          onClick={handleLoginRedirect}
          size="large"
        />
      </Modal.Body>
    </Modal>
  );
};

export default AuthErrorFallback;
