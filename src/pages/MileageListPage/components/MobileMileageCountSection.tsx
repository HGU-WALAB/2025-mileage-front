import { Flex } from '@/components';
import { boxShadow } from '@/styles/common';
import { getOpacityColor } from '@/utils/getOpacityColor';
import { styled } from '@mui/material';

import { useGetMileageQuery } from '../hooks/useGetMileageQuery';
import { useQueryParams } from '../hooks/useQueryParams';

export const MobileMileageCountSection = () => {
  const { queryParams } = useQueryParams();
  const { data: mileageList } = useGetMileageQuery({
    semester: queryParams.semester,
    done: 'Y',
  });

  return (
    <S.Container justify="center" align="center" gap=".5rem">
      {queryParams.semester} 참여 마일리지
      <S.CountBox>{mileageList?.length ?? '-'} 건</S.CountBox>
    </S.Container>
  );
};

const S = {
  Container: styled(Flex.Row)`
    background-color: ${({ theme }) => theme.palette.white};
    border-radius: 0.5rem;
    color: ${({ theme }) => theme.palette.primary.main};
    font-weight: bold;
    padding: 0.5rem;
    ${boxShadow}
  `,
  CountBox: styled(Flex.Row)`
    background-color: ${({ theme }) => theme.palette.primary.light};
    border: 1px solid
      ${({ theme }) => getOpacityColor(theme.palette.primary.main, 0.5)};
    border-radius: 0.5rem;
    padding: 0 0.5rem;
  `,
};
