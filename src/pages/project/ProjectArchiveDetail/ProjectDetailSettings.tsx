import { ProjectDetailResponse } from '../types/projectDetail';
import { styled } from '@mui/material';
import { useState } from 'react';
import ProjectDetailInfo from './components/ProjectDetailInfo';
import ProjectDetailStatus from './components/ProjectDetailStatus';
import ProjectDeleteModal from './components/ProjectDeleteModal';
import { useDeleteProjectMutation } from '../hooks/useDeleteProjectMutation';
import { useNavigate } from 'react-router-dom';
import { ROUTE_PATH } from '@/constants/routePath';
import { toast } from 'react-toastify';
import { TOAST_MESSAGES } from '@/constants/toastMessage';

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
  const navigate = useNavigate();
  const { deleteProject, isPending: isDeleting } = useDeleteProjectMutation();

  const handleDeleteClick = () => {
    setShowDeleteModal(true);
  };

  const handleDeleteCancel = () => {
    setShowDeleteModal(false);
  };

  const handleDeleteConfirm = async () => {
    try {
      await deleteProject({ projectId: projectDetail.projectId.toString() });
      toast.success(TOAST_MESSAGES.deleteProject.succeed);
      navigate(ROUTE_PATH.archive);
    } catch (error) {
      toast.error(TOAST_MESSAGES.deleteProject.failed);
    }
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
        isDeleting={isDeleting}
      />
    </SettingsContainer>
  );
};

export default ProjectDetailSettings;
