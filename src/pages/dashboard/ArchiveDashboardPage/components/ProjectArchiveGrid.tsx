import { MAX_RESPONSIVE_WIDTH } from '@/constants/system';
import { styled, useMediaQuery } from '@mui/material';

import { useGetProjectArchiveQuery } from '../hooks/useGetProjectArchiveQuery';
import { ProjectArchiveCard } from './ProjectArchiveCard';

import { AddProjectCard } from './AddProjectCard';
import { ProjectPageForwardButton } from './ProjectPageForwardButton';

export const ProjectArchiveGrid = () => {
  const isMobile = useMediaQuery(MAX_RESPONSIVE_WIDTH);
  const { projects } = useGetProjectArchiveQuery();

  return (
    <S.GridLayout isMobile={isMobile}>
      {projects.length === 0 ? (
        <AddProjectCard />
      ) : (
        projects.map(project => (
          <ProjectArchiveCard key={project.projectId} project={project} />
        ))
      )}
      {/* <ProjectPageForwardButton /> */}
    </S.GridLayout>
  );
};

const S = {
  GridLayout: styled('div')<{ isMobile: boolean }>`
    display: grid;
    gap: 1.5rem;
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

    @media (width <= 600px) {
      grid-template-columns: repeat(1, 1fr);
    }
  `,
};
