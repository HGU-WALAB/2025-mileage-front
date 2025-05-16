import { Button, Flex, Heading, Modal, ToggleButton } from '@/components';
import { useGetProjectsQuery } from '@/pages/project/hooks/useGetProjectsQuery';
import { usePatchTopProjectQuery } from '@/pages/project/hooks/usePatchTopProjectQuery';
import { ProjectResponse } from '@/pages/project/types/project';
import { styled } from '@mui/material';
import { useState } from 'react';

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
  const [selectedProjectId, setSelectedProjectId] = useState<
    number | undefined
  >(selectedProject?.projectId);
  const { projects } = useGetProjectsQuery();
  const { patchTopProject } = usePatchTopProjectQuery();

  const handleSetTopProject = async (e: React.MouseEvent) => {
    e.stopPropagation();
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
        <Heading>프로필에 표시할 대표 프로젝트를 선택해주세요 !</Heading>
        <Flex.Row justify="center" wrap="wrap" gap="1rem">
          {projects.map(project => (
            <ToggleButton
              key={project.name}
              label={project.name}
              selected={project.projectId === selectedProjectId}
              onClick={e => {
                e.stopPropagation();
                setSelectedProjectId(project.projectId);
              }}
            />
          ))}
        </Flex.Row>
      </Modal.Body>

      <Modal.Footer>
        <Flex.Row width="100%" justify="center" gap="2rem">
          <S.CloseButton
            label="닫기"
            onClick={toggleModal}
            size="large"
            color="grey"
          />
          <S.SubmitButton
            label="저장하기"
            size="large"
            onClick={handleSetTopProject}
          />
        </Flex.Row>
      </Modal.Footer>
    </Modal>
  );
};

const S = {
  SubmitButton: styled(Button)`
    width: 200px;
  `,
  CloseButton: styled(Button)`
    background-color: ${({ theme }) => theme.palette.grey300};
    width: 200px;

    &:hover,
    &:active {
      background-color: ${({ theme }) => theme.palette.grey400};
    }
  `,
};
