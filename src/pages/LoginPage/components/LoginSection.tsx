import { Flex, Heading } from '@/components';
import { MAX_RESPONSIVE_WIDTH } from '@/constants/system';
import { styled, useMediaQuery } from '@mui/material';

import { HisnetLoginButton } from './HisnetLoginButton';

export const LoginSection = () => {
  const isMobile = useMediaQuery(MAX_RESPONSIVE_WIDTH);

  return (
    <Flex.Column
      width="300px"
      justify="space-between"
      align="center"
      padding={isMobile ? '0' : '0 1rem'}
      gap="1rem"
    >
      {!isMobile && <S.Text as="h1">Log In</S.Text>}
      <HisnetLoginButton />
    </Flex.Column>
  );
};

const S = {
  Text: styled(Heading)`
    color: ${({ theme }) => theme.palette.white};
    ${({ theme }) => theme.typography.h1}
    font-size: 2rem;
  `,
};
