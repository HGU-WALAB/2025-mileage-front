import { LogoIcon } from '@/assets';
import { Button, Heading, Modal } from '@/components';
import { ROUTE_PATH } from '@/constants/routePath';
import { useOpenModal } from '@/hooks';
import { useTheme } from '@mui/material';
import { useNavigate } from 'react-router-dom';

import { usePostLogoutMutation } from '@auth/hooks/usePostLogoutMutation';

export const NoAccessLogoutModal = () => {
  const theme = useTheme();
  const { open, toggleModal } = useOpenModal(true);

  const { mutate: logout } = usePostLogoutMutation();
  const navigate = useNavigate();
  const handleLoginRedirect = () => {
    logout();
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
            textAlign: 'center',
          }}
        >
          마일리지 신청 대상이 아닙니다. <br />
          다음에 다시 시도해 주세요. 곧 로그아웃됩니다!
        </Heading>
        <Button label="확인" onClick={handleLoginRedirect} size="large" />
      </Modal.Body>
    </Modal>
  );
};
