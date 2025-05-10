import { MAX_RESPONSIVE_WIDTH } from '@/constants/system';
import { styled, useMediaQuery } from '@mui/material';

import { ROUTE_PATH } from '@/constants/routePath';
import { EmptyProjectSection } from '@/pages/ProjectArchivePage/components/EmptyProjectSection';
import { useNavigate } from 'react-router-dom';
import { useGetProjectsQuery } from '../hooks/useGetProjectsQuery';
import { ProjectCard } from './ProjectCard';

export const ProjectGridSection = () => {
  const navigate = useNavigate();
  const { projects } = useGetProjectsQuery();
  const isMobile = useMediaQuery(MAX_RESPONSIVE_WIDTH);

  if (!projects.length) return <EmptyProjectSection />;
  return (
    <S.Grid isMobile={isMobile}>
      {projects.map(project => (
        <ProjectCard
          key={project.projectId}
          project={project}
          onClick={() => navigate(ROUTE_PATH.projectDetail(project.projectId))}
        />
      ))}
    </S.Grid>
  );
};

const S = {
  Grid: styled('div')<{ isMobile: boolean }>`
    display: grid;
    gap: 1rem;
    grid-template-columns: ${({ isMobile }) =>
      isMobile ? 'repeat(1, 1fr)' : 'repeat(4, 1fr)'};
    height: fit-content;
    justify-items: center;
    overflow-y: scroll;
    padding: 1rem 0;
  `,
};
