import { Flex } from '@/components';
import { ROUTE_PATH } from '@/constants/routePath';
import { styled } from '@mui/material';
import { useNavigate } from 'react-router-dom';

import { useGetSemesterCapabilityQuery } from '@dashboard/hooks/useGetSemesterCapabilityQuery';

import { GridSectionCard } from '../../components/GridSectionCard';

export const MileageCountSection = () => {
  const navigate = useNavigate();
  const { data: semesterCapability } = useGetSemesterCapabilityQuery();

  return (
    <GridSectionCard onClick={() => navigate(ROUTE_PATH.mileageList)}>
      <Flex.Column height="100%" justify="center" align="center">
        <S.LabelText>누적 마일리지 건수</S.LabelText>
        <S.MileageNumber>
          {semesterCapability[semesterCapability.length - 1]
            ?.userMilestoneCount ?? 0}
        </S.MileageNumber>
      </Flex.Column>
    </GridSectionCard>
  );
};

const S = {
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
