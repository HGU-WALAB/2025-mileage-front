import { Flex, Heading, RadarChart } from '@/components';
import { mockCapability } from '@/mocks/fixtures/capability';
import { boxShadow } from '@/styles/common';
import { styled } from '@mui/material';

const RadarChartSection = () => {
  const data = mockCapability;

  return (
    <S.Container height="40%" width="50%" padding="2rem" gap="1rem">
      <Heading as="h3">나의 역량 비교 그래프</Heading>
      <Flex height="90%" width="100%">
        <RadarChart data={data.data} />
      </Flex>
    </S.Container>
  );
};

export default RadarChartSection;

const S = {
  Container: styled(Flex.Column)`
    background-color: ${({ theme }) => theme.palette.variant.default};
    border-radius: 1rem;
    ${boxShadow}
  `,
};
