import { ErrorBox } from '@/components';
import { MAX_RESPONSIVE_WIDTH } from '@/constants/system';
import { styled, useMediaQuery } from '@mui/material';
import { Suspense } from 'react';
import { ErrorBoundary } from 'react-error-boundary';

import { GridSectionCard } from '../../components/GridSectionCard';
import { AwardCountSection } from './AwardCountSection';
import { MileageCountSection } from './MileageCountSection';
import { TechStackSection } from './TechStackSection';
import { TopProjectSection } from './TopProjectSection';

export const SectionGrid = () => {
  const isMobile = useMediaQuery(MAX_RESPONSIVE_WIDTH);

  return (
    <S.Grid isMobile={isMobile}>
      <ErrorBoundary FallbackComponent={ErrorBox}>
        <Suspense fallback={<GridSectionCard />}>
          <TechStackSection />
        </Suspense>
      </ErrorBoundary>

      <ErrorBoundary FallbackComponent={ErrorBox}>
        <Suspense fallback={<GridSectionCard />}>
          <TopProjectSection />
        </Suspense>
      </ErrorBoundary>

      <ErrorBoundary FallbackComponent={ErrorBox}>
        <Suspense fallback={<GridSectionCard />}>
          <AwardCountSection />
        </Suspense>
      </ErrorBoundary>

      <ErrorBoundary FallbackComponent={ErrorBox}>
        <Suspense fallback={<GridSectionCard />}>
          <MileageCountSection />
        </Suspense>
      </ErrorBoundary>
    </S.Grid>
  );
};

const S = {
  Grid: styled('div')<{ isMobile: boolean }>`
    display: grid;
    gap: 1rem;
    grid-template-columns: ${({ isMobile }) =>
      isMobile ? 'repeat(1, 1fr)' : 'repeat(2, 1fr)'};
    width: 100%;
  `,
};
