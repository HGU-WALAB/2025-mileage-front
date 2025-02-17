import { Flex, Text } from '@/components';
import { useGetMileageQuery } from '@/hooks/queries';
import { useAuthStore } from '@/stores';
import { getOpacityColor } from '@/utils/getOpacityColor';
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
        <Text as="h2" style={{ fontSize: '2rem' }}>
          현재 {student?.studentName} 학부생님의
        </Text>
        <Text as="h2" style={{ fontSize: '2rem' }}>
          <span style={{ fontWeight: 'bold' }}>{currentSemester} 학기 </span>
          등록하신 마일리지입니다
        </Text>
        <S.CountContainer>
          <Flex.Column align="center">
            <Flex.Row>마일리지 갯수</Flex.Row>
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
    background-color: #f0f5ff;
    border-radius: 1rem;
    color: ${({ theme }) => theme.palette.white};
    height: 300px;
    padding: 2rem;
  `,
  Container: styled(Flex.Column)`
    background-color: ${({ theme }) => theme.palette.primary.main};
    border-radius: 1rem;
    color: ${({ theme }) => theme.palette.white};
    font-size: 24px;
    height: 150px;
    position: relative;
    width: 80%;
  `,
  CountContainer: styled(Flex.Column)`
    background-color: ${({ theme }) => theme.palette.white};
    border-radius: 1rem;
    box-shadow: ${({ theme }) =>
      `0 4px 24px ${getOpacityColor(theme.palette.black, 0.15)}`};
    color: ${({ theme }) => theme.palette.black};
    height: 150px;
    padding: 2rem;
    position: absolute;
    right: 10%;
    top: -30%;
    width: 20%;
  `,
  CountNumber: styled(Flex.Row)`
    color: ${({ theme }) => theme.palette.primary.main};
    font-size: 50px;
    font-weight: bold;
  `,
};
