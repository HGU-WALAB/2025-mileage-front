import { useParams } from 'react-router-dom';

import { useGetProjectQuery } from '../../hooks/useGetProjectQuery';
import { ProjectDetailContent } from './ProjectDetailContent';

export const ProjectDetailSection = () => {
  const { id } = useParams<{ id: string }>();
  const { project } = useGetProjectQuery(id ?? '');

  return <ProjectDetailContent project={project} />;
};
