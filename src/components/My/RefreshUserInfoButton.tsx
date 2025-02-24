import { Button, Flex } from '@/components';
import UpdateSucceedModal from '@/components/My/UpdateSucceedModal';
import { styled } from '@mui/material';
import { useState } from 'react';

const RefreshUserInfoButton = () => {
  const [isSuccess, setIsSuccess] = useState(false);
  const handleRefreshAuth = () => {
    setIsSuccess(!isSuccess);
  };

  return (
    <Flex.Row justify="center">
      <S.RefreshButton
        label="정보 업데이트하기"
        size="large"
        onClick={handleRefreshAuth}
      />
      <UpdateSucceedModal isSucceed={isSuccess} />
    </Flex.Row>
  );
};

export default RefreshUserInfoButton;

const S = {
  RefreshButton: styled(Button)`
    box-sizing: border-box;
    height: 4rem;
    padding: 1rem 4rem;
    ${({ theme }) => theme.typography.h4}
  `,
};
