import { LogoIcon } from '@/assets';
import { Flex, Heading } from '@/components';
import { MAX_RESPONSIVE_WIDTH } from '@/constants/system';
import { getOpacityColor } from '@/utils/getOpacityColor';
import { styled, useMediaQuery } from '@mui/material';

export const LogoSection = () => {
  const isMobile = useMediaQuery(MAX_RESPONSIVE_WIDTH);

  return (
    <Flex.Row
      align="center"
      justify={isMobile ? 'center' : 'flex-start'}
      gap="1.5rem"
      margin="0 1rem"
      wrap="wrap"
    >
      <LogoIcon width={60} height={60} />
      <S.LogoTitle as="h1" isMobile={isMobile}>
        CSEE Milestone
      </S.LogoTitle>
    </Flex.Row>
  );
};

const S = {
  LogoTitle: styled(Heading)<{ isMobile: boolean }>`
    color: ${({ theme }) => theme.palette.white};
    filter: drop-shadow(
      0 4px 16px ${({ theme }) => getOpacityColor(theme.palette.black, 0.5)}
    );
    font-size: ${({ isMobile }) => (isMobile ? '2.5rem' : '3rem')};
    font-weight: 700;
    text-align: center;
  `,
};
