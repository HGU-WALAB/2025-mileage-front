import { Flex } from '@/components';
import { styled } from '@mui/material';

import { GridSectionCard } from '../../components/GridSectionCard';
import { useGetShareMileageCountQuery } from '../../hooks/useGetShareMileageCountQuery';

export const MileageCountSection = () => {
  const { mileageCount } = useGetShareMileageCountQuery();

  return (
    <GridSectionCard>
      <Flex.Column height="100%" justify="center" align="center">
        <S.LabelText>누적 마일리지 건수</S.LabelText>
        <S.MileageNumber>{mileageCount}</S.MileageNumber>
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
