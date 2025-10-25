import { ProjectDetailResponse } from '../../types/projectDetail';
import { Text, Button, Input, Modal } from '@/components';
import { styled } from '@mui/material';
import { useState } from 'react';

interface Props {
  projectDetail: ProjectDetailResponse;
  open: boolean;
  onClose: () => void;
  onConfirm: () => void;
}

const ModalContainer = styled('div')`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 100%;
  max-width: 400px;
`;

const ProjectInfo = styled('div')`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  padding: 1rem;
  background: #f5f5f5;
  border-radius: 0.5rem;
`;

const ProjectName = styled('div')`
  font-size: 1.25rem;
  font-weight: bold;
  color: #333;
`;

const ProjectStats = styled('div')`
  display: flex;
  gap: 1rem;
  color: #666;
  font-size: 0.875rem;
`;

const ConfirmationInput = styled(Input)`
  border: 1px solid #ff4444;
  border-radius: 0.25rem;
  padding: 0.5rem;
  font-size: 0.875rem;
  
  &:focus {
    outline: none;
    border-color: #ff4444;
    box-shadow: 0 0 0 2px rgba(255, 68, 68, 0.2);
  }
`;

const DeleteConfirmButton = styled(Button)`
  background: #ff4444;
  color: white;
  border: none;
  padding: 0.75rem 1.5rem;
  border-radius: 0.5rem;
  font-size: 0.875rem;
  font-weight: 500;
  
  &:hover {
    background: #cc3333;
  }
  
  &:disabled {
    background: #ccc;
    cursor: not-allowed;
  }
`;

const ProjectDeleteModal = ({ projectDetail, open, onClose, onConfirm }: Props) => {
  const [deleteConfirmation, setDeleteConfirmation] = useState('');
  
  const isDeleteButtonDisabled = deleteConfirmation !== projectDetail.name;

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
        <Text as="h4" bold style={{ marginBottom: '1rem' }}>프로젝트 삭제</Text>
        
        <ModalContainer>
          <ProjectInfo>
            <div style={{ fontSize: '2rem' }}>📄</div>
            <ProjectName>{projectDetail.name}</ProjectName>
            <ProjectStats>
              <span>⭐ 0 stars</span>
              <span>👁️ 0 watchers</span>
            </ProjectStats>
          </ProjectInfo>
          
          <Text style={{ fontSize: '0.875rem', color: '#666' }}>
            확인을 위해 "{projectDetail.name}"을(를) 아래 입력란에 입력하세요
          </Text>
          
          <ConfirmationInput
            value={deleteConfirmation}
            onChange={(e) => setDeleteConfirmation(e.target.value)}
            placeholder={projectDetail.name}
          />
          
          <DeleteConfirmButton
            label="프로젝트 삭제하기"
            onClick={handleConfirm}
            disabled={isDeleteButtonDisabled}
            style={{ width: '100%' }}
            size="medium"
          />
        </ModalContainer>
      </div>
    </Modal>
  );
};

export default ProjectDeleteModal;
