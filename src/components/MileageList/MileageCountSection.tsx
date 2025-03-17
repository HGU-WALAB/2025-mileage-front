import { Flex } from '@/components';
import { MAX_RESPONSIVE_WIDTH } from '@/constants/system';
import { useQueryParams } from '@/hooks';
import { useGetMileageQuery } from '@/hooks/queries';
import { useAuthStore } from '@/stores';
import { boxShadow } from '@/styles/common';
import { getOpacityColor } from '@/utils/getOpacityColor';
import { styled, useMediaQuery } from '@mui/material';

const MileageCountSection = () => {
  const isMobile = useMediaQuery(MAX_RESPONSIVE_WIDTH);

  const { student } = useAuthStore();
  const { queryParams } = useQueryParams();
  const { data: mileageList } = useGetMileageQuery({
    studentId: student.studentId,
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
        {queryParams.semester} 참여한 마일리지
      </S.TextBox>
    </S.Container>
  );
};

export default MileageCountSection;

const S = {
  Container: styled(Flex.Column)`
    background-color: ${({ theme }) => theme.palette.white};
    border-radius: 1rem;
    height: 130px;
    min-width: 200px;
    padding: 1rem;
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
