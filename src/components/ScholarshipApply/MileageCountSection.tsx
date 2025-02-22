import { Flex, Text } from '@/components';
import { useGetMileageQuery } from '@/hooks/queries';
import { useAuthStore } from '@/stores';
import { boxShadow } from '@/styles/common';
import { styled } from '@mui/material';

const MileageCountSection = () => {
  const { student, currentSemester } = useAuthStore();

  const { data: mileageList } = useGetMileageQuery({
    studentId: student?.studentId ?? '',
    semester: currentSemester ?? '',
    done: 'Y',
  });

  return (
    <S.Wrapper justify="center" align="center">
      <S.Container justify="center" padding="3rem">
        <Text as="h2" style={{ fontSize: '1.25rem' }}>
          현재 {student?.studentName} 학부생님의
        </Text>
        <Text as="h2" style={{ fontSize: '1.25rem' }}>
          <span style={{ fontWeight: 'bold' }}>{currentSemester} 학기 </span>
          등록하신 마일리지입니다
        </Text>
        <S.CountContainer>
          <Flex.Column align="center">
            <Flex.Row style={{ fontSize: '1rem' }}>마일리지 개수</Flex.Row>
            <Flex.Row align="baseline" gap=".5rem">
              <S.CountNumber>{mileageList?.length}</S.CountNumber>개
            </Flex.Row>
          </Flex.Column>
        </S.CountContainer>
      </S.Container>
    </S.Wrapper>
  );
};

export default MileageCountSection;

const S = {
  Wrapper: styled(Flex.Row)`
    background-color: ${({ theme }) => theme.palette.primary.light};
    color: ${({ theme }) => theme.palette.white};
    height: 200px;
    padding: 2rem;
  `,
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
