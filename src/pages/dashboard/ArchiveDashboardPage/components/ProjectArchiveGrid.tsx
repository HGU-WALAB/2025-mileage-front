import { MAX_RESPONSIVE_WIDTH } from '@/constants/system';
import { styled, useMediaQuery } from '@mui/material';

import { useGetProjectsQuery } from '@project/hooks/useGetProjectsQuery';
import { ProjectCard } from '@project/ProjectListPage/components/ProjectCard';

import { AddProjectCard } from './AddProjectCard';
import { ProjectPageForwardButton } from './ProjectPageForwardButton';

export const ProjectArchiveGrid = () => {
  const isMobile = useMediaQuery(MAX_RESPONSIVE_WIDTH);
  const { projects } = useGetProjectsQuery();

  return (
    <S.GridLayout isMobile={isMobile}>
      {projects.length === 0 ? (
        <AddProjectCard />
      ) : (
        projects
          .slice(0, isMobile ? 2 : 3)
          .map(project => <ProjectCard project={project} />)
      )}
      <ProjectPageForwardButton />
    </S.GridLayout>
  );
};

const S = {
  GridLayout: styled('div')<{ isMobile: boolean }>`
    display: grid;
    gap: 1rem;
    grid-template-columns: ${({ isMobile }) =>
      isMobile ? 'repeat(1, 1fr)' : 'repeat(4, 1fr)'};

    ${({ isMobile }) =>
      isMobile &&
      `
        & > *:last-of-type {
          order: -1;
        }
      `}
  `,
};
