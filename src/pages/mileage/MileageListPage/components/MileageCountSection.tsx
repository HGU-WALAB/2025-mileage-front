import { Flex } from '@/components';
import { MAX_RESPONSIVE_WIDTH } from '@/constants/system';
import { boxShadow } from '@/styles/common';
import { getOpacityColor } from '@/utils/getOpacityColor';
import { styled, useMediaQuery } from '@mui/material';

import { useGetMileageQuery } from '../../hooks/useGetMileageQuery';
import { useQueryParams } from '../../hooks/useQueryParams';

export const MileageCountSection = () => {
  const isMobile = useMediaQuery(MAX_RESPONSIVE_WIDTH);

  const { queryParams } = useQueryParams();
  const { data: mileageList } = useGetMileageQuery({
    semester: queryParams.semester,
    done: 'Y',
  });

  if (isMobile) return null;
  return (
    <S.Container justify="space-between">
      <S.CountContainer align="center" justify="center" gap=".5rem">
        <S.CountNumber>{mileageList?.length ?? '-'}</S.CountNumber>건
      </S.CountContainer>
      <S.TextBox align="center" justify="center" padding=".5rem 0 0">
        {queryParams.semester} 참여 마일리지
      </S.TextBox>
    </S.Container>
  );
};

const S = {
  Container: styled(Flex.Column)`
    background-color: ${({ theme }) => theme.palette.white};
    border-radius: 1rem;
    min-height: 120px;
    min-width: 220px;
    padding: 1rem;
    word-break: keep-all;
    ${boxShadow}
  `,
  CountContainer: styled(Flex.Row)`
    background-color: ${({ theme }) => theme.palette.primary.light};
    border: 1px solid
      ${({ theme }) => getOpacityColor(theme.palette.primary.main, 0.5)};
    border-radius: 1rem;
    color: ${({ theme }) => theme.palette.grey500};
    font-size: 1.5rem;
    font-weight: bold;
    height: 70px;
    padding: 1rem;
    width: 100%;
    ${boxShadow}
  `,
  CountNumber: styled(Flex.Row)`
    color: ${({ theme }) => theme.palette.primary.main};
    font-size: 3rem;
    font-weight: bold;
  `,
  TextBox: styled(Flex.Row)`
    color: ${({ theme }) => theme.palette.primary.main};
    font-size: 1.25rem;
    font-weight: bold;
  `,
};
