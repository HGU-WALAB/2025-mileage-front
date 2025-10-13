import { Flex } from '@/components';
import Modal from '@/components/Modal/Modal';
import ModalBody from '@/components/Modal/ModalBody';
import ModalHeader from '@/components/Modal/ModalHeader';
import { MAX_RESPONSIVE_WIDTH } from '@/constants/system';
import { useMediaQuery } from '@mui/material';

import { ProjectArchiveAddForm } from './ProjectArchiveAddForm';
import { styled } from '@mui/material';

interface Props {
  open: boolean;
  toggleModal: () => void;
}

export const ProjectArchiveAddModal = ({ open, toggleModal }: Props) => {
  const isMobile = useMediaQuery(MAX_RESPONSIVE_WIDTH);

  return (
    <S.ModalContainer>
      <Modal open={open} toggleModal={toggleModal} size="large">
        <ModalHeader style={{ padding: isMobile ? '1rem' : '1.5rem', paddingBottom: '0.5rem' }}>
          <Flex.Column gap="0.5rem" align="flex-start">
            <h2 style={{ fontSize: '1.5rem', fontWeight: 'bold', margin: 0 }}>
              프로젝트 추가하기
            </h2>
            <p style={{ color: '#666', fontSize: '0.875rem', margin: 0 }}>
              언제나 내용을 프로젝트 설정에서 수정을 할 수 있습니다.
            </p>
          </Flex.Column>
        </ModalHeader>

        <ModalBody style={{ padding: isMobile ? '1rem' : '1.5rem', maxHeight: '80vh', overflowY: 'auto' }}>
          <ProjectArchiveAddForm toggleModal={toggleModal} />
        </ModalBody>
      </Modal>
    </S.ModalContainer>
  );
};

const S = {
  ModalContainer: styled('div')`
    .MuiDialog-paper {
      width: 90vw;
      max-width: 800px;
      margin: 1rem;
      
      @media (max-width: 768px) {
        width: 95vw;
        max-width: 95vw;
        margin: 0.5rem;
        max-height: 95vh;
      }
    }
    
    .MuiDialogContent-root {
      padding: 1.5rem;
      
      @media (max-width: 768px) {
        padding: 1rem;
      }
    }
  `,
};
