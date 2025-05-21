import { DeleteBlueIcon } from '@/assets';
import { Button, Flex, Heading, Modal, Text } from '@/components';
import { ROUTE_PATH } from '@/constants/routePath';
import { useOpenModal } from '@/hooks';
import { useTheme } from '@mui/material';
import { useNavigate, useParams } from 'react-router-dom';

import { useDeleteProjectMutation } from '../../hooks/useDeleteProjectMutation';

export const DeleteProjectSection = () => {
  const navigate = useNavigate();
  const { projectId } = useParams<{ projectId: string }>();
  const theme = useTheme();
  const { open, toggleModal } = useOpenModal();

  const { deleteProject } = useDeleteProjectMutation();

  const handleDeleteProject = async () => {
    await deleteProject({ projectId: projectId ?? '' });
    navigate(ROUTE_PATH.project);
  };

  return (
    <Modal
      open={open}
      toggleModal={toggleModal}
      trigger={
        <Button label="삭제하기" icon={DeleteBlueIcon} variant="outlined" />
      }
      size="small"
      hasCloseButton
      style={{
        backgroundColor: theme.palette.background.default,
      }}
    >
      <Modal.Body position="center">
        <Flex.Column width="100%" align="center" gap="1rem" padding="1rem">
          <Heading as="h2">프로젝트를 정말 삭제할까요?</Heading>
          <Text>삭제하면 다시 복구할 수 없어요</Text>

          <Flex.Row width="100%" justify="center" gap="1rem" margin="2rem 0 0">
            <Button
              label="취소하기"
              onClick={toggleModal}
              size="full"
              color="grey"
            />
            <Button
              label="삭제하기"
              size="full"
              onClick={handleDeleteProject}
            />
          </Flex.Row>
        </Flex.Column>
      </Modal.Body>
    </Modal>
  );
};
