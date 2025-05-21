import { MAX_RESPONSIVE_WIDTH } from '@/constants/system';
import { styled, useMediaQuery } from '@mui/material';
import { Suspense } from 'react';

import { GridSectionCard } from '../../components/GridSectionCard';
import { AwardCountSection } from './AwardCountSection';
import { MileageCountSection } from './MileageCountSection';
import { TechStackSection } from './TechStackSection';
import { TopProjectSection } from './TopProjectSection';

export const SectionGrid = () => {
  const isMobile = useMediaQuery(MAX_RESPONSIVE_WIDTH);

  return (
    <S.Grid isMobile={isMobile}>
      <Suspense fallback={<GridSectionCard />}>
        <TechStackSection />
      </Suspense>

      <Suspense fallback={<GridSectionCard />}>
        <TopProjectSection />
      </Suspense>

      <Suspense fallback={<GridSectionCard />}>
        <AwardCountSection />
      </Suspense>

      <Suspense fallback={<GridSectionCard />}>
        <MileageCountSection />
      </Suspense>
    </S.Grid>
  );
};

const S = {
  Grid: styled('div')<{ isMobile: boolean }>`
    display: grid;
    gap: 1rem;
    grid-template-columns: ${({ isMobile }) =>
      isMobile ? 'repeat(1, 1fr)' : 'repeat(4, 1fr)'};
    width: 100%;
  `,
};
