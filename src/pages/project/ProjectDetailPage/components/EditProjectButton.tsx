import { EditBlueIcon } from '@/assets';
import { Button } from '@/components';
import { ROUTE_PATH } from '@/constants/routePath';
import { useNavigate, useParams } from 'react-router-dom';

export const EditProjectButton = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  const handleMoveEditProject = () => {
    navigate(ROUTE_PATH.editProject(id ?? ''));
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
