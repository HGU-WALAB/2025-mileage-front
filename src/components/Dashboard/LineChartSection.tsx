import { Flex, Heading, LineChart } from '@/components';
import { mockSemesterCapability } from '@/mocks/fixtures/semesterCapability';
import { boxShadow } from '@/styles/common';
import { styled } from '@mui/material';

const LineChartSection = () => {
  const data = mockSemesterCapability;

  return (
    <S.Container height="40%" width="100%" padding="2rem" gap="1rem">
      <Heading as="h3">나의 학기별 역량 성장 그래프</Heading>
      <Flex height="90%" width="100%">
        <LineChart data={data} />
      </Flex>
    </S.Container>
  );
};

export default LineChartSection;

const S = {
  Container: styled(Flex.Column)`
    background-color: ${({ theme }) => theme.palette.variant.default};
    border-radius: 1rem;
    ${boxShadow}
  `,
};
