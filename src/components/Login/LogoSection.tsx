import { LogoIcon } from '@/assets';
import { Flex, Heading } from '@/components';
import { MAX_RESPONSIVE_WIDTH } from '@/constants/system';
import { styled, useMediaQuery } from '@mui/material';

const LogoSection = () => {
  const isMobile = useMediaQuery(MAX_RESPONSIVE_WIDTH);

  return (
    <Flex.Row align="center" gap="1rem">
      <LogoIcon width={isMobile ? 30 : 60} height={isMobile ? 30 : 60} />
      <S.LogoTitle as="h1" isMobile={isMobile}>
        CSEE Mileage
      </S.LogoTitle>
    </Flex.Row>
  );
};

export default LogoSection;

const S = {
  LogoTitle: styled(Heading)<{ isMobile: boolean }>`
    color: ${({ theme }) => theme.palette.white};
    font-size: ${({ isMobile }) => (isMobile ? '1.5rem' : '3rem')};
    font-weight: 700;
  `,
};
