import { Flex, Heading, Text } from '@/components';
import { ProcessStep } from '@/components/Dashboard';
import { boxShadow } from '@/styles/common';
import { styled, useTheme } from '@mui/material';

const ProcessSection = () => {
  const theme = useTheme();
  return (
    <S.Container
      height="fit-content"
      width="100%"
      wrap="wrap"
      justify="space-around"
      align="center"
    >
      <Flex.Column justify="center" align="center" padding=".5rem">
        <Heading as="h2" margin=".5rem" color={theme.palette.primary.main}>
          마일리지 장학금 신청 절차
        </Heading>
        <Text style={{ fontSize: '12px' }}>
          반드시 마일리지 장학금 공지사항을 정독 후 신청하세요.
        </Text>
        <Text style={{ fontSize: '12px' }}>
          아래 3가지 절차를 모두 완료해야 신청이 완료됩니다.
        </Text>
      </Flex.Column>
      <Flex.Row justify="space-around" align="center" gap="1rem" wrap="wrap">
        <ProcessStep />
      </Flex.Row>
    </S.Container>
  );
};

export default ProcessSection;

const S = {
  Container: styled(Flex.Row)`
    background-color: ${({ theme }) => theme.palette.white};
    border-radius: 1rem;
    padding: 1rem;

    ${boxShadow}
  `,
};
