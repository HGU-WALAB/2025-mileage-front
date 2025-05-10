import { ROUTE_PATH } from '@/constants/routePath';
import { boxShadow } from '@/styles/common';
import { styled } from '@mui/material';
import { useNavigate } from 'react-router-dom';

import { useGetSemesterCapabilityQuery } from '@/pages/DashboardPage/hooks/useGetSemesterCapabilityQuery';

export const MileageCountSection = () => {
  const navigate = useNavigate();
  const { data: semesterCapability } = useGetSemesterCapabilityQuery();

  return (
    <S.Section onClick={() => navigate(ROUTE_PATH.mileageList)}>
      <S.LabelText>누적 마일리지 건수</S.LabelText>
      <S.MileageNumber>
        {semesterCapability?.pop()?.userMilestoneCount ?? 0}
      </S.MileageNumber>
    </S.Section>
  );
};

const S = {
  Section: styled('div')`
    align-items: center;
    background-color: ${({ theme }) => theme.palette.variant.default};
    border-radius: 1rem;
    cursor: pointer;
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    height: 250px;
    justify-content: center;
    padding: 2rem;
    ${boxShadow};
    width: 25%;

    &:hover,
    &:active {
      background-color: ${({ theme }) => theme.palette.variant.grey};
    }
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
