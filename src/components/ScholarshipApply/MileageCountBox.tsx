import { Flex } from '@/components';
import { ROUTE_PATH } from '@/constants/routePath';
import { useGetMileageQuery } from '@/hooks/queries';
import { useAuthStore } from '@/stores';
import { boxShadow } from '@/styles/common';
import { styled } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const MileageCountBox = () => {
  const navigate = useNavigate();

  const { student, currentSemester } = useAuthStore();
  const { data: mileageList } = useGetMileageQuery({
    studentId: student.studentId,
    semester: currentSemester,
    done: 'Y',
  });

  const handleClick = () => {
    navigate(ROUTE_PATH.mileageList);
  };

  return (
    <S.CountContainer onClick={handleClick}>
      <Flex.Column align="center">
        <Flex.Row style={{ fontSize: '1rem' }}>마일리지 항목 개수</Flex.Row>
        <Flex.Row align="baseline" gap=".5rem">
          <S.CountNumber>{mileageList?.length ?? '-'}</S.CountNumber>개
        </Flex.Row>
      </Flex.Column>
    </S.CountContainer>
  );
};

export default MileageCountBox;

const S = {
  Container: styled(Flex.Column)`
    background-color: ${({ theme }) => theme.palette.primary.main};
    border-radius: 1rem;
    color: ${({ theme }) => theme.palette.white};
    height: 110px;
    position: relative;
    width: 80%;
  `,
  CountContainer: styled(Flex.Column)`
    background-color: ${({ theme }) => theme.palette.white};
    border-radius: 1rem;
    color: ${({ theme }) => theme.palette.black};
    height: 110px;
    padding: 1rem;
    position: absolute;
    right: 10%;
    top: -30%;
    width: 20%;
    ${boxShadow}
  `,
  CountNumber: styled(Flex.Row)`
    color: ${({ theme }) => theme.palette.primary.main};
    font-size: 2.5rem;
    font-weight: bold;
  `,
};
