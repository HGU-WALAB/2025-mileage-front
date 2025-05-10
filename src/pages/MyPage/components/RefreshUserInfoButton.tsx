import { Button, Flex } from '@/components';
import { styled } from '@mui/material';

import { useLogin } from '@/pages/LoginPage/hooks/useLogin';
import { UpdateSucceedModal } from '../components/UpdateSucceedModal';

export const RefreshUserInfoButton = () => {
  const { handleHisnetAuth, isLoginSucceed } = useLogin();

  const handleRefreshAuth = () => {
    handleHisnetAuth();
  };

  return (
    <Flex.Row justify="center">
      <S.RefreshButton
        label="정보 업데이트하기"
        size="large"
        onClick={handleRefreshAuth}
      />
      <UpdateSucceedModal isSucceed={isLoginSucceed} />
    </Flex.Row>
  );
};

const S = {
  RefreshButton: styled(Button)`
    box-sizing: border-box;
    height: 4rem;
    padding: 1rem 4rem;
    ${({ theme }) => theme.typography.h4}
  `,
};
