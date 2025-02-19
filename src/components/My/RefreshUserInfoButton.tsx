import { Button, Flex } from '@/components';
import { styled } from '@mui/material';

const RefreshUserInfoButton = () => {
  const handleRefreshAuth = () => {};

  return (
    <Flex.Row justify="center">
      <S.RefreshButton
        label="정보 업데이트하기"
        size="large"
        onClick={handleRefreshAuth}
      />
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
