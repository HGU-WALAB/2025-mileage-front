import { PlusIcon } from '@/assets';
import { Button } from '@/components';
import { ROUTE_PATH } from '@/constants/routePath';
import { useNavigate } from 'react-router-dom';

export const AddProjectButton = () => {
  const navigate = useNavigate();

  const handleMoveAddProject = () => {
    navigate(ROUTE_PATH.newProject);
  };

  return (
    <Button
      label="새 프로젝트 추가하기"
      size="medium"
      icon={PlusIcon}
      onClick={handleMoveAddProject}
    />
  );
};
