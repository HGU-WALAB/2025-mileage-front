import { LoadingIcon } from '@/assets';
import { ErrorBox, Flex, Heading } from '@/components';
import { boxShadow } from '@/styles/common';
import { styled } from '@mui/material';
import { Suspense } from 'react';
import { ErrorBoundary } from 'react-error-boundary';

import { ActivityRecommendContent } from './ActivityRecommendContent';

export const ActivityRecommendSection = () => {
  return (
    <S.Container height="300px" width="100%" padding="1rem" gap=".5rem">
      <Heading as="h3">역량 강화 활동 추천</Heading>

      <Flex.Row height="90%" width="100%" justify="center" align="center">
        <ErrorBoundary FallbackComponent={ErrorBox}>
          <Suspense fallback={<LoadingIcon width={100} height={100} />}>
            <ActivityRecommendContent />
          </Suspense>
        </ErrorBoundary>
      </Flex.Row>
    </S.Container>
  );
};

const S = {
  Container: styled(Flex.Column)`
    background-color: ${({ theme }) => theme.palette.variant.default};
    border-radius: 1rem;
    ${boxShadow}
  `,
};
