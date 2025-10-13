import { MAX_RESPONSIVE_WIDTH } from '@/constants/system';
import { styled, useMediaQuery } from '@mui/material';

import { ProjectArchiveCardSkeleton } from './ProjectArchiveCardSkeleton';

export const ProjectArchiveGridSkeleton = () => {
  const isMobile = useMediaQuery(MAX_RESPONSIVE_WIDTH);

  return (
    <S.Grid isMobile={isMobile}>
      {Array.from({ length: isMobile ? 4 : 6 }).map((_, i) => (
        <ProjectArchiveCardSkeleton key={i} />
      ))}
    </S.Grid>
  );
};

const S = {
  Grid: styled('div')<{ isMobile: boolean }>`
    display: grid;
    gap: 1rem;
    grid-template-columns: ${({ isMobile }) =>
      isMobile ? 'repeat(1, 1fr)' : 'repeat(3, 1fr)'};
    justify-items: center;
    padding: 1rem 0;
    
    @media (width <= 1400px) {
      grid-template-columns: repeat(3, 1fr);
    }

    @media (width <= 1100px) {
      grid-template-columns: repeat(2, 1fr);
    }
  `,
};
