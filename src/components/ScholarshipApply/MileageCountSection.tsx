import { Flex, Heading } from '@/components';
import { ROUTE_PATH } from '@/constants/routePath';
import { useGetMileageQuery } from '@/hooks/queries';
import { styled } from '@mui/material';
import { Link } from 'react-router-dom';

const MileageCountSection = () => {
  const studentId = '22000770';
  const semester = '2024-1';

  const { data: mileageList } = useGetMileageQuery({
    studentId: studentId,
    semester: semester,
    done: 'Y',
  });

  return (
    <S.Container justify="center" align="center">
      <Heading as="h2">
        <S.AccentText> 최혜림 (22000770) </S.AccentText>학생의{'  '}
        <S.AccentText>{semester}</S.AccentText> 학기 등록된 마일리지는 총{'  '}
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
