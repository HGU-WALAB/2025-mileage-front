import { Flex } from '@/components';
import { Skeleton, styled } from '@mui/material';

export const ProjectCardSkeleton = () => {
  return (
    <S.Card width="100%" height="320px">
      <Skeleton variant="rectangular" height={180} width="100%" />

      <Flex.Column gap=".5rem" padding="1rem">
        <Skeleton variant="text" width="60%" height={24} />
        <Skeleton variant="text" width="40%" height={18} />

        <Flex.Row wrap="wrap" gap=".5rem">
          {Array.from({ length: 4 }).map((_, i) => (
            <Skeleton
              key={i}
              variant="rounded"
              width={60}
              height={24}
              style={{ borderRadius: '24px' }}
            />
          ))}
        </Flex.Row>
      </Flex.Column>
    </S.Card>
  );
};

const S = {
  Card: styled(Flex.Column)`
    border-radius: 12px;
    box-shadow: 0 4px 12px rgb(0 0 0 / 10%);
    max-width: 360px;
    overflow: hidden;
  `,
};
