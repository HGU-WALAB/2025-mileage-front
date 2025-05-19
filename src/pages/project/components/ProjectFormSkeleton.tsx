import { Flex } from '@/components';
import { MAX_RESPONSIVE_WIDTH } from '@/constants/system';
import { Skeleton, styled, useMediaQuery } from '@mui/material';

export const ProjectFormSkeleton = () => {
  const isMobile = useMediaQuery(MAX_RESPONSIVE_WIDTH);

  return (
    <S.Container isMobile={isMobile}>
      <Skeleton variant="text" width="60%" height={32} sx={{ mb: 3 }} />

      <Flex.Column gap="2rem">
        {Array.from({ length: 10 }).map((_, idx) => (
          <Skeleton
            key={idx}
            variant="rectangular"
            height={56}
            sx={{ borderRadius: '0.5rem' }}
          />
        ))}

        {/* 기간 선택 박스는 두 개 */}
        <Flex.Row gap="1rem">
          <Skeleton
            variant="rectangular"
            height={56}
            sx={{ flex: 1, borderRadius: '0.5rem' }}
          />
          <Skeleton
            variant="rectangular"
            height={56}
            sx={{ flex: 1, borderRadius: '0.5rem' }}
          />
        </Flex.Row>

        {/* 기술 스택 Autocomplete */}
        <Skeleton
          variant="rectangular"
          height={56}
          sx={{ borderRadius: '0.5rem' }}
        />

        {/* 업로드 버튼 및 이미지 미리보기 */}
        <Flex.Row gap="1rem">
          <Skeleton
            variant="rectangular"
            width={150}
            height={56}
            sx={{ borderRadius: '0.5rem' }}
          />
          <Skeleton
            variant="rectangular"
            width={200}
            height={120}
            sx={{ borderRadius: '0.5rem' }}
          />
        </Flex.Row>

        <Flex.Row justify="center" margin="2rem 0 0">
          <Skeleton
            variant="rectangular"
            width={200}
            height={56}
            sx={{ borderRadius: '1rem' }}
          />
        </Flex.Row>
      </Flex.Column>
    </S.Container>
  );
};

const S = {
  Container: styled(Flex.Column)<{ isMobile: boolean }>`
    background-color: ${({ theme }) => theme.palette.white};
    border: 1px solid ${({ theme }) => theme.palette.grey200};
    border-radius: ${({ isMobile }) => (isMobile ? `0` : `1rem`)};
    margin: ${({ isMobile }) => (isMobile ? `0 auto` : `1rem auto`)};
    max-width: 1000px;
    padding: ${({ isMobile }) => (isMobile ? `1rem` : `2rem 4rem`)};
  `,
};
