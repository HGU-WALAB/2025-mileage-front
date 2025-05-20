import { Flex } from '@/components';
import { styled } from '@mui/material';

import { GridSectionCard } from '../../components/GridSectionCard';
import { useGetShareAwardCountQuery } from '../../hooks/useGetShareAwardCountQuery';

export const AwardCountSection = () => {
  const { awardCount } = useGetShareAwardCountQuery();

  return (
    <GridSectionCard>
      <Flex.Column height="100%" justify="center" align="center">
        <S.LabelText>수상 개수</S.LabelText>
        <S.AwardNumber>{awardCount}</S.AwardNumber>
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
  AwardNumber: styled('p')`
    color: ${({ theme }) => theme.palette.primary.dark};
    font-size: 4rem;
    font-weight: 700;
    margin: 0;
  `,
};
