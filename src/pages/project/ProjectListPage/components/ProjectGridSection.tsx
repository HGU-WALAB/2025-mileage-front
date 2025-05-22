import { styled } from '@mui/material';

import { useGetProjectsQuery } from '../../hooks/useGetProjectsQuery';
import { EmptyProjectSection } from './EmptyProjectSection';
import { ProjectCard } from './ProjectCard';

export const ProjectGridSection = () => {
  const { projects } = useGetProjectsQuery();

  if (!projects.length) return <EmptyProjectSection />;
  return (
    <S.Grid>
      {projects.map(project => (
        <ProjectCard key={project.projectId} project={project} />
      ))}
    </S.Grid>
  );
};

const S = {
  Grid: styled('div')`
    display: grid;
    gap: 1rem;
    grid-template-columns: repeat(4, 1fr);
    height: fit-content;
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
