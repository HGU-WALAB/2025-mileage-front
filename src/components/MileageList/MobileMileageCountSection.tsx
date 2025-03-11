import { Flex } from '@/components';
import { useGetMileageQuery } from '@/hooks/queries';
import { useAuthStore } from '@/stores';
import { boxShadow } from '@/styles/common';
import { getOpacityColor } from '@/utils/getOpacityColor';
import { styled } from '@mui/material';

const MobileMileageCountSection = () => {
  const { student, currentSemester } = useAuthStore();
  const { data: mileageList } = useGetMileageQuery({
    studentId: student.studentId,
    semester: currentSemester,
    done: 'Y',
  });

  return (
    <S.Container justify="center" align="center" gap=".5rem">
      현재 참여한 마일리지
      <S.CountBox>{mileageList?.length ?? '-'} 개</S.CountBox>
    </S.Container>
  );
};

export default MobileMileageCountSection;

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
