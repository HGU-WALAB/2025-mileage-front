import { Flex } from '@/components';
import { MAX_RESPONSIVE_WIDTH } from '@/constants/system';
import { Skeleton, styled, useMediaQuery } from '@mui/material';

export const AwardArchiveSkeleton = () => {
  const isMobile = useMediaQuery(MAX_RESPONSIVE_WIDTH);

  return (
    <Flex.Column as="section" gap="1rem">
      <S.GridLayout isMobile={isMobile}>
        {Array.from({ length: 2 }).map((_, idx) => (
          <Skeleton
            key={idx}
            variant="rectangular"
            height={150}
            sx={{ borderRadius: '1rem' }}
          />
        ))}

        <S.ForwardButtonSkeleton>
          <Skeleton variant="text" width="60%" height={24} />
          <Skeleton
            variant="rectangular"
            width={80}
            height={50}
            sx={{ alignSelf: 'flex-end' }}
          />
        </S.ForwardButtonSkeleton>
      </S.GridLayout>
    </Flex.Column>
  );
};

const S = {
  GridLayout: styled('div')<{ isMobile: boolean }>`
    display: grid;
    gap: 1rem;
    grid-template-columns: ${({ isMobile }) =>
      isMobile ? 'repeat(2, 1fr)' : 'repeat(3, 1fr)'};

    ${({ isMobile }) =>
      isMobile &&
      `
        & > *:last-of-type {
          grid-column: span 2;
        }
      `}
  `,
  ForwardButtonSkeleton: styled(Flex.Column)`
    background-color: ${({ theme }) => theme.palette.grey[100]};
    border-radius: 1rem;
    justify-content: space-between;
    min-height: 75px;
    overflow: hidden;
    padding: 1.5rem;
    position: relative;
  `,
};
