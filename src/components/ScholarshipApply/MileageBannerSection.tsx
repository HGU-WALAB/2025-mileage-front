import { CountBoxFallback, Flex, Text } from '@/components';
import { MileageCountBox } from '@/components/ScholarshipApply';
import { MAX_RESPONSIVE_WIDTH } from '@/constants/system';
import { useAuthStore } from '@/stores';
import { styled, useMediaQuery } from '@mui/material';
import { ErrorBoundary } from 'react-error-boundary';

const MileageBannerSection = () => {
  const isMobile = useMediaQuery(MAX_RESPONSIVE_WIDTH);
  const { student, currentSemester } = useAuthStore();

  return (
    <S.Wrapper justify="center" align="center" padding="1rem">
      <S.Container justify="center" isMobile={isMobile}>
        <Text as="h2" style={{ fontSize: isMobile ? '16px' : '24px' }}>
          현재 {student?.studentName} 학부생님의
        </Text>
        <Text as="h2" style={{ fontSize: isMobile ? '16px' : '24px' }}>
          <span style={{ fontWeight: 'bold' }}>{currentSemester} 학기 </span>
          참여하신 마일리지입니다
        </Text>
        <ErrorBoundary FallbackComponent={CountBoxFallback}>
          <MileageCountBox />
        </ErrorBoundary>
      </S.Container>
    </S.Wrapper>
  );
};

export default MileageBannerSection;

const S = {
  Wrapper: styled(Flex.Row)`
    background-color: ${({ theme }) => theme.palette.primary.light};
    color: ${({ theme }) => theme.palette.white};
    height: 200px;
  `,
  Container: styled(Flex.Column)<{ isMobile: boolean }>`
    background-color: ${({ theme }) => theme.palette.primary.main};
    border-radius: 1rem;
    color: ${({ theme }) => theme.palette.white};
    height: 110px;
    padding: ${({ isMobile }) => (isMobile ? '1rem' : '3rem')};
    position: relative;
    width: ${({ isMobile }) => (isMobile ? '100%' : '80%')};
  `,
};
