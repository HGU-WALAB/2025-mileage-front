import { useParams } from 'react-router-dom';

import { useGetProjectQuery } from '../../hooks/useGetProjectQuery';
import { ProjectDetailContent } from './ProjectDetailContent';

export const ProjectDetailSection = () => {
  const { projectId } = useParams<{ projectId: string }>();
  const { project } = useGetProjectQuery(projectId ?? '');

  return <ProjectDetailContent project={project} />;
};
