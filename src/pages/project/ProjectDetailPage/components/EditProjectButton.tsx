import { EditBlueIcon } from '@/assets';
import { Button } from '@/components';
import { ROUTE_PATH } from '@/constants/routePath';
import { useNavigate, useParams } from 'react-router-dom';

export const EditProjectButton = () => {
  const { projectId } = useParams<{ projectId: string }>();
  const navigate = useNavigate();

  const handleMoveEditProject = () => {
    navigate(ROUTE_PATH.editProject(projectId ?? ''));
  };

  return (
    <Button
      label="편집하기"
      icon={EditBlueIcon}
      onClick={handleMoveEditProject}
      variant="outlined"
    />
  );
};
