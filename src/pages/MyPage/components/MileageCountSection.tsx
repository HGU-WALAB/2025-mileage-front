import { Flex } from '@/components';
import { useGetSemesterCapabilityQuery } from '@/hooks/queries';
import { boxShadow } from '@/styles/common';
import { styled, useTheme } from '@mui/material';

export const MileageCountSection = () => {
  const theme = useTheme();
  const { data: semesterCapability } = useGetSemesterCapabilityQuery();

  return (
    <S.Section
      width="25%"
      height="250px"
      justify="center"
      align="center"
      direction="column"
      padding="2rem"
      gap="1.5rem"
      backgroundColor={theme.palette.variant.default}
    >
      <S.LabelText>누적 마일리지 건수</S.LabelText>
      <S.MileageNumber>
        {semesterCapability?.pop()?.userMilestoneCount ?? 0} 건
      </S.MileageNumber>
    </S.Section>
  );
};

const S = {
  Section: styled(Flex.Column)`
    border-radius: 1rem;
    ${boxShadow}
  `,
  LabelText: styled('p')`
    color: ${({ theme }) => theme.palette.primary.main};
    font-size: 1rem;
    font-weight: 600;
    margin: 0;
  `,
  MileageNumber: styled('p')`
    color: ${({ theme }) => theme.palette.primary.dark};
    font-size: 4rem;
    font-weight: 700;
    margin: 0;
  `,
};
