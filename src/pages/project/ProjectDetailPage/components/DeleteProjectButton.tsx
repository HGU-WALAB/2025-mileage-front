import { DeleteBlueIcon } from '@/assets';
import { Button } from '@/components';

export const DeleteProjectButton = () => {
  const handleMoveDeleteProject = () => {
    alert('삭제!');
  };

  return (
    <Button
      label="삭제하기"
      icon={DeleteBlueIcon}
      onClick={handleMoveDeleteProject}
      variant="outlined"
    />
  );
};
