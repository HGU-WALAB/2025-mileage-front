import { Flex, Heading, Text } from '@/components';
import { MAX_RESPONSIVE_WIDTH } from '@/constants/system';
import { boxShadow } from '@/styles/common';
import { getOpacityColor } from '@/utils/getOpacityColor';
import { styled, useMediaQuery, useTheme } from '@mui/material';

const ProcessSection = () => {
  const theme = useTheme();
  return (
    <S.Container
      height="fit-content"
      width="100%"
      wrap="wrap"
      justify="space-around"
      align="center"
    >
      <Flex.Column justify="center" align="center" padding=".5rem">
        <Heading as="h2" margin=".5rem" color={theme.palette.primary.main}>
          마일리지 장학금 신청 절차
        </Heading>
        <Text style={{ fontSize: '12px' }}>
          반드시 마일리지 장학금 공지사항을 정독 후 신청하세요.
        </Text>
        <Text style={{ fontSize: '12px' }}>
          아래 3가지 절차를 모두 완료해야 신청이 완료됩니다.
        </Text>
      </Flex.Column>
      <Flex.Row justify="space-around" align="center" gap="1rem" wrap="wrap">
        <ProcessStep />
      </Flex.Row>
    </S.Container>
  );
};

export default ProcessSection;

const processStep = [
  '마일리지 시스템에 신청',
  '신분증 및 통장 사본 제출',
  '개인정보 이용 동의서 서명 완료',
];

const ProcessStep = () => {
  const isMobile = useMediaQuery(MAX_RESPONSIVE_WIDTH);
  return (
    <>
      {processStep.map((step, index) => (
        <>
          <S.StepBox justify="center" align="center" isMobile={isMobile}>
            <Heading
              as="h3"
              style={{
                textAlign: 'center',
              }}
            >
              {step}
            </Heading>
          </S.StepBox>
          {index + 1 !== processStep.length &&
            (isMobile ? <S.DownArrowBox /> : <S.RightArrowBox />)}
        </>
      ))}
    </>
  );
};

const S = {
  Container: styled(Flex.Row)`
    background-color: ${({ theme }) => theme.palette.white};
    border-radius: 1rem;
    padding: 1rem;

    ${boxShadow}
  `,
  StepBox: styled(Flex.Row)<{ isMobile: boolean }>`
    background-color: ${({ theme }) => theme.palette.primary.light};
    border: 2px solid
      ${({ theme }) => getOpacityColor(theme.palette.primary.main, 0.5)};
    border-radius: 1rem;
    color: ${({ theme }) => theme.palette.primary.main};
    height: fit-content;
    padding: ${({ isMobile }) => (isMobile ? '1rem' : '1.5rem')};
    width: ${({ isMobile }) => (isMobile ? '100%' : 'fit-content')};
  `,
  DownArrowBox: styled('div')`
    border-left: 20px solid transparent;
    border-right: 20px solid transparent;
    border-top: 25px solid
      ${({ theme }) => getOpacityColor(theme.palette.primary.main, 0.7)};
    height: 0;
    width: 0;
  `,
  RightArrowBox: styled('div')`
    border-bottom: 20px solid transparent;
    border-left: 25px solid
      ${({ theme }) => getOpacityColor(theme.palette.primary.main, 0.7)};
    border-top: 20px solid transparent;
    height: 0;
    width: 0;
  `,
};
