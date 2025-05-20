import { Flex } from '@/components';
import { ROUTE_PATH } from '@/constants/routePath';
import { styled } from '@mui/material';
import { useNavigate } from 'react-router-dom';

import { useGetAwardsQuery } from '@award/hooks/useGetAwardsQuery';

import { GridSectionCard } from '../../components/GridSectionCard';

export const AwardCountSection = () => {
  const navigate = useNavigate();
  const { awards } = useGetAwardsQuery();

  return (
    <GridSectionCard onClick={() => navigate(ROUTE_PATH.award)}>
      <Flex.Column height="100%" justify="center" align="center">
        <S.LabelText>수상 개수</S.LabelText>
        <S.AwardNumber>{awards.length}</S.AwardNumber>
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
