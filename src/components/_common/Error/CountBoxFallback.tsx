import { Flex } from '@/components';
import { boxShadow } from '@/styles/common';
import { styled } from '@mui/material';

const CountBoxFallback = () => {
  return (
    <S.CountContainer>
      <Flex.Column align="center">
        <Flex.Row style={{ fontSize: '1rem' }}>마일리지 개수</Flex.Row>
        <Flex.Row align="baseline" gap=".5rem">
          <S.CountNumber>N</S.CountNumber>개
        </Flex.Row>
      </Flex.Column>
    </S.CountContainer>
  );
};

export default CountBoxFallback;

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
