import { Flex } from '@/components';
import { MAX_RESPONSIVE_WIDTH } from '@/constants/system';
import { Skeleton, styled, useMediaQuery } from '@mui/material';

export const ProjectDetailSkeleton = () => {
  const isMobile = useMediaQuery(MAX_RESPONSIVE_WIDTH);

  return (
    <Flex.Column gap="2rem" padding="0 2rem">
      <Flex.Row
        gap="0.5rem"
        justify="space-between"
        wrap={isMobile ? 'wrap' : 'nowrap'}
      >
        <Flex.Column gap="1rem" height="300px" justify="space-around">
          <Flex.Column gap="0.5rem">
            <Skeleton variant="text" width="60%" height={36} />
            <Skeleton variant="text" width="40%" height={20} />
          </Flex.Column>

          <Flex.Column gap="0.5rem">
            <Skeleton variant="text" width="40%" />
            <Skeleton variant="text" width="80%" />
          </Flex.Column>

          <Flex.Column gap="0.5rem">
            <Skeleton variant="text" width="40%" />
            <Flex.Row gap="1rem">
              <Skeleton variant="rectangular" width={100} height={20} />
              <Skeleton variant="rectangular" width={60} height={20} />
              <Skeleton variant="rectangular" width={60} height={20} />
            </Flex.Row>
          </Flex.Column>

          <Flex.Column gap="0.5rem">
            <Skeleton variant="text" width="40%" />
            <Flex.Row gap="0.5rem" wrap="wrap">
              {Array.from({ length: 5 }).map((_, i) => (
                <Skeleton
                  key={i}
                  variant="rectangular"
                  width={60}
                  height={24}
                  style={{ borderRadius: '24px' }}
                />
              ))}
            </Flex.Row>
          </Flex.Column>
        </Flex.Column>

        <S.MainImageSkeleton variant="rectangular" />
      </Flex.Row>

      <Flex.Column gap="2rem" margin="2rem 0 6rem">
        <Flex.Column gap="0.5rem">
          <Skeleton variant="text" width="30%" />
          <Skeleton variant="text" width="100%" height={120} />
        </Flex.Column>
      </Flex.Column>
    </Flex.Column>
  );
};

const S = {
  MainImageSkeleton: styled(Skeleton)`
    border-radius: 0.75rem;
    height: 300px;
    max-height: 300px;
    width: 500px;
  `,
};
