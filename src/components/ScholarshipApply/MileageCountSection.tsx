import { Flex, Heading } from '@/components';
import { ROUTE_PATH } from '@/constants/routePath';
import { useGetMileageQuery } from '@/hooks/queries';
import { useAuthStore } from '@/stores';
import { styled } from '@mui/material';
import { Link } from 'react-router-dom';

const MileageCountSection = () => {
  const { student, currentSemester } = useAuthStore();

  const { data: mileageList } = useGetMileageQuery({
    studentId: student?.studentId ?? '',
    semester: currentSemester ?? '',
    done: 'Y',
  });

  return (
    <S.Container justify="center" align="center">
      <Heading as="h2">
        <S.AccentText>
          {' '}
          {student?.studentName}({student?.studentId}){' '}
        </S.AccentText>
        학생의{'  '}
        <S.AccentText>{currentSemester}</S.AccentText> 학기 등록된 마일리지는 총
        {'  '}
        <Link to={ROUTE_PATH.mileageList}>
          <S.AccentText canHover>{mileageList?.length}개</S.AccentText>
        </Link>
        입니다.
      </Heading>
    </S.Container>
  );
};

export default MileageCountSection;

const S = {
  Container: styled(Flex.Row)`
    background-color: ${({ theme }) => theme.palette.blue300};
    border-radius: 1rem;
    color: ${({ theme }) => theme.palette.white};
    padding: 2rem;
  `,
  AccentText: styled('span')<{ canHover?: boolean }>`
    color: ${({ theme }) => theme.palette.blue600};

    &:hover {
      text-decoration: ${({ canHover }) => (canHover ? 'underline' : 'none')};
    }
  `,
};
