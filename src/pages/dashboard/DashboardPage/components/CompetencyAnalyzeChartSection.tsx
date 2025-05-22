import { DeferredComponent, ErrorContent, Flex, Heading } from '@/components';
import { boxShadow } from '@/styles/common';
import { styled } from '@mui/material';
import { Suspense, useState } from 'react';
import { ErrorBoundary } from 'react-error-boundary';

import { CompareOptionButtonSection } from './CompareOptionButtonSection';
import { RadarChartSection } from './RadarChartSection';
import { LoadingIcon } from '@/assets';

export const CompetencyAnalyzeChartSection = () => {
  const [compareOption, setCompareOption] = useState<string[]>([]);

  return (
    <S.Container height="300px" width="100%" padding="1rem" gap="1rem">
      <Flex width="100%" justify="space-between" align="center" wrap="wrap">
        <Heading as="h3">나의 역량 비교 그래프</Heading>

        <CompareOptionButtonSection
          compareOption={compareOption}
          setCompareOption={setCompareOption}
        />
      </Flex>

      <Flex height="70%" width="100%" justify="center" align="center">
        <ErrorBoundary FallbackComponent={ErrorContent}>
          <Suspense
            fallback={
              <DeferredComponent>
                <LoadingIcon width={100} height={100} />
              </DeferredComponent>
            }
          >
            <RadarChartSection compareOption={compareOption} />
          </Suspense>
        </ErrorBoundary>
      </Flex>
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
