import { LogoIcon } from '@/assets';
import { Flex, Heading } from '@/components';
import { styled } from '@mui/material';

const LogoSection = () => {
  return (
    <Flex.Row align="center" gap="1rem">
      <LogoIcon width={60} height={60} />
      <S.LogoTitle as="h1">CSEE Mileage</S.LogoTitle>
    </Flex.Row>
  );
};

export default LogoSection;

const S = {
  LogoTitle: styled(Heading)`
    color: ${({ theme }) => theme.palette.white};
    font-size: 3rem;
    font-weight: 700;
  `,
};
