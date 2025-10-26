import { ProjectDetailResponse } from '../../types/projectDetail';
import { Button, Input, Modal, Heading } from '@/components';
import { styled } from '@mui/material';
import { useState } from 'react';

interface Props {
  projectDetail: ProjectDetailResponse;
  open: boolean;
  onClose: () => void;
  onConfirm: () => void;
  isDeleting?: boolean;
}


const ProjectDeleteModal = ({ projectDetail, open, onClose, onConfirm, isDeleting = false }: Props) => {
  const [deleteConfirmation, setDeleteConfirmation] = useState('');
  
  const isDeleteButtonDisabled = deleteConfirmation !== projectDetail.name || isDeleting;

  const handleConfirm = () => {
    if (deleteConfirmation === projectDetail.name) {
      onConfirm();
      setDeleteConfirmation('');
    }
  };

  const handleClose = () => {
    onClose();
    setDeleteConfirmation('');
  };

  return (
    <Modal open={open} toggleModal={handleClose}>
      <div style={{ padding: '1.5rem' }}>
        <Heading as="h4" style={{ marginBottom: '1rem', fontSize: '1.24rem', color: '#2c3e50' }}>
          프로젝트 삭제
        </Heading>
        
        <ModalContainer>
          <ProjectInfo>
            <ProjectIcon>📄</ProjectIcon>
            <ProjectName>{projectDetail.name}</ProjectName>
            <ProjectStats>
              <span>프로젝트를 정말 삭제하시겠습니까? </span>
            </ProjectStats>
          </ProjectInfo>
          
          <ConfirmationSection>
            <ConfirmationText>
              확인을 위해 <strong>"{projectDetail.name}"</strong>을(를) 아래 입력란에 입력하세요
            </ConfirmationText>
            
            <ConfirmationInput
              value={deleteConfirmation}
              onChange={(e) => setDeleteConfirmation(e.target.value)}
              placeholder={projectDetail.name}
            />
          </ConfirmationSection>
          
          <DeleteConfirmButton
            label={isDeleting ? "삭제 중..." : "프로젝트 삭제하기"}
            onClick={handleConfirm}
            disabled={isDeleteButtonDisabled}
            style={{ width: '100%', height: '2.8rem' }}
          />
        </ModalContainer>
      </div>
    </Modal>
  );
};

export default ProjectDeleteModal;

const ModalContainer = styled('div')`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  width: 100%;
  max-width: 420px;
`;

const ProjectInfo = styled('div')`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.75rem;
  padding: 1.5rem;
  background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
  border-radius: 0.75rem;
  border: 1px solid #dee2e6;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
`;

const ProjectIcon = styled('div')`
  width: 4rem;
  height: 4rem;
  background: linear-gradient(135deg, #ff6b6b 0%, #ee5a52 100%);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  color: white;
  box-shadow: 0 4px 12px rgba(255, 107, 107, 0.3);
`;

const ProjectName = styled('div')`
  font-size: 1.375rem;
  font-weight: 700;
  color: #2c3e50;
  text-align: center;
`;

const ProjectStats = styled('div')`
  display: flex;
  gap: 1.5rem;
  color: #6c757d;
  font-size: 0.875rem;
  font-weight: 500;
`;

const ConfirmationSection = styled('div')`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
`;

const ConfirmationText = styled('div')`
  font-size: 0.875rem;
  color: #495057;
  line-height: 1.5;
  text-align: center;
  padding: 0.75rem;
  background: #f8f9fa;
  border-radius: 0.5rem;
  border-left: 4px solid #ff6b6b;
`;

const ConfirmationInput = styled(Input)`
  padding: 0.75rem 0rem;
  font-size: 0.875rem;
  transition: all 0.2s ease;
  
  &:focus {
    outline: none;
    border-color: #ff6b6b;
  }
  
  &::placeholder {
    color: #adb5bd;
  }
`;

const DeleteConfirmButton = styled(Button)`
  background: linear-gradient(135deg, #ff6b6b 0%, #ee5a52 100%);
  color: white;
  border: none;
  padding: 1rem 1.5rem;
  border-radius: 0.5rem;
  font-size: 0.875rem;
  font-weight: 600;
  transition: all 0.2s ease;
  box-shadow: 0 2px 8px rgba(255, 107, 107, 0.3);
  
  &:hover:not(:disabled) {
    background: linear-gradient(135deg, #ff5252 0%, #e53935 100%);
    transform: translateY(-1px);
    box-shadow: 0 4px 12px rgba(255, 107, 107, 0.4);
  }
  
  &:disabled {
    background: #adb5bd;
    cursor: not-allowed;
    transform: none;
    box-shadow: none;
  }
`;