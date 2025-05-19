import { Modal } from '@/components';

import { ProjectDetailContent } from '@project/ProjectDetailPage/components/ProjectDetailContent';
import { ProjectResponse } from '@project/types/project';

interface Props {
  open: boolean;
  toggleModal: () => void;
  project: ProjectResponse;
}

export const TopProjectDetailModal = ({
  open,
  toggleModal,
  project,
}: Props) => {
  return (
    <Modal open={open} toggleModal={toggleModal} size="large" hasCloseButton>
      <Modal.Body
        position="center"
        style={{
          margin: '1rem 0',
          gap: '2rem',
        }}
      >
        <ProjectDetailContent project={project} />
      </Modal.Body>
    </Modal>
  );
};
