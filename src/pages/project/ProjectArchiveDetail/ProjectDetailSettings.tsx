import { ProjectDetailResponse } from '../types/projectDetail';
import { styled } from '@mui/material';
import { useState } from 'react';
import ProjectDetailInfo from './components/ProjectDetailInfo';
import ProjectDetailStatus from './components/ProjectDetailStatus';
import ProjectDeleteModal from './components/ProjectDeleteModal';

interface Props {
  projectDetail: ProjectDetailResponse;
}

const SettingsContainer = styled('div')`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  width: 100%;
`;

const ProjectDetailSettings = ({ projectDetail }: Props) => {
  const [showDeleteModal, setShowDeleteModal] = useState(false);

  const handleDeleteClick = () => {
    setShowDeleteModal(true);
  };

  const handleDeleteCancel = () => {
    setShowDeleteModal(false);
  };

  const handleDeleteConfirm = () => {
    // TODO: 실제 삭제 API 호출
    console.log('프로젝트 삭제:', projectDetail.name);
    setShowDeleteModal(false);
  };

  return (
    <SettingsContainer>
      <ProjectDetailInfo projectDetail={projectDetail} />
      <ProjectDetailStatus projectDetail={projectDetail} onDeleteClick={handleDeleteClick} />
      <ProjectDeleteModal 
        projectDetail={projectDetail}
        open={showDeleteModal}
        onClose={handleDeleteCancel}
        onConfirm={handleDeleteConfirm}
      />
    </SettingsContainer>
  );
};

export default ProjectDetailSettings;
