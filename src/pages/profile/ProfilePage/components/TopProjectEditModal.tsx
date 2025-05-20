import { Button, Flex, Heading, Modal, ToggleButton } from '@/components';
import { ROUTE_PATH } from '@/constants/routePath';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { useGetProjectsQuery } from '@project/hooks/useGetProjectsQuery';
import { usePatchTopProjectQuery } from '@project/hooks/usePatchTopProjectQuery';
import { ProjectResponse } from '@project/types/project';

interface Props {
  open: boolean;
  toggleModal: () => void;
  selectedProject: ProjectResponse | null;
}

export const TopProjectEditModal = ({
  open,
  toggleModal,
  selectedProject,
}: Props) => {
  const navigate = useNavigate();
  const [selectedProjectId, setSelectedProjectId] = useState<
    number | undefined
  >(selectedProject?.projectId);

  const { projects } = useGetProjectsQuery();
  const { patchTopProject } = usePatchTopProjectQuery();

  const handleSetTopProject = async () => {
    if (!selectedProjectId) return;

    await patchTopProject({ projectId: selectedProjectId });
    toggleModal();
  };

  return (
    <Modal open={open} toggleModal={toggleModal} size="medium" hasCloseButton>
      <Modal.Body
        position="center"
        style={{
          margin: '2rem auto',
          gap: '2rem',
        }}
      >
        <Heading as="h2">
          프로필에 표시할 대표 프로젝트를 선택해주세요 !
        </Heading>
        <Flex.Row justify="center" wrap="wrap" gap="1rem">
          {projects.length ? (
            projects.map(project => (
              <ToggleButton
                key={project.name}
                label={project.name}
                selected={project.projectId === selectedProjectId}
                onClick={() => setSelectedProjectId(project.projectId)}
              />
            ))
          ) : (
            <Flex.Column gap="1rem">
              아직 등록된 프로젝트가 없어요! 🥲
              <Button
                label="프로젝트 추가하러 가기"
                onClick={() => navigate(ROUTE_PATH.project)}
              />
            </Flex.Column>
          )}
        </Flex.Row>
      </Modal.Body>

      <Modal.Footer>
        <Flex.Row width="100%" justify="center" gap="2rem">
          <Button label="닫기" onClick={toggleModal} size="full" color="grey" />
          <Button label="저장하기" size="full" onClick={handleSetTopProject} />
        </Flex.Row>
      </Modal.Footer>
    </Modal>
  );
};
