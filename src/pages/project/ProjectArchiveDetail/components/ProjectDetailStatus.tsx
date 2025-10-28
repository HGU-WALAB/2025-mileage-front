import { ProjectDetailResponse } from '../../types/projectDetail';
import { Button, Heading } from '@/components';
import { styled } from '@mui/material';
import { useState } from 'react';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { patchProjectStatus } from '../../apis/project';
import Dropdown from '@/components/Dropdown/Dropdown';

interface Props {
  projectDetail: ProjectDetailResponse;
  onDeleteClick: () => void;
}

const ProjectDetailStatus = ({ projectDetail, onDeleteClick }: Props) => {
  const [selectedStatus, setSelectedStatus] = useState(projectDetail.status);
  const queryClient = useQueryClient();

  const statusOptions = [
    { value: 'ongoing', label: '진행' },
    { value: 'stopped', label: '보류' },
    { value: 'finished', label: '종료' }
  ];

  const mutation = useMutation({
    mutationFn: patchProjectStatus,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['projectDetail', projectDetail.projectId.toString()] });
    },
  });

  const handleStatusChange = (newStatus: string) => {
    const statusValue = newStatus as 'ongoing' | 'stopped' | 'finished';
    setSelectedStatus(statusValue);
    mutation.mutate({
      projectId: projectDetail.projectId.toString(),
      status: statusValue
    });
  };

  return (
    <StatusContainer>
      <Heading as="h4" style={{ fontSize: '1.25rem' }}>프로젝트 관리</Heading>

      <StatusCard>
        
        <StatusChangeSection>
          <StatusText>
            현재 프로젝트의 진행 상태를 변경할 수 있습니다.
          </StatusText>
          <Dropdown
            items={statusOptions.map(option => option.label)}
            selectedItem={statusOptions.find(option => option.value === selectedStatus)?.label || '진행'}
            setSelectedItem={(label) => {
              const option = statusOptions.find(opt => opt.label === label);
              if (option) {
                handleStatusChange(option.value);
              }
            }}
            width="120px"
          />
        </StatusChangeSection>
      </StatusCard>

      <StatusCard isDelete>
        <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'center', width: '100%' }}>
          <div style={{ color: '#ff4444', fontSize: '1.2rem'}}>⚠️</div>
          <DeleteContent>
            <DeleteText>
              프로젝트를 완전히 삭제하면 복구할 수 없습니다.<br />관련된 기록, 이미지, 링크 정보가 모두 제거됩니다.
            </DeleteText>
            <DeleteButton
              label="영구적으로 삭제하기"
              variant="contained"
              onClick={onDeleteClick}
              style={{ flexShrink: 0 }}
              size="medium"
            />
          </DeleteContent>
        </div>
      </StatusCard>
    </StatusContainer>
  );
};

export default ProjectDetailStatus;


const StatusContainer = styled('div')`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  width: 100%;
`;

const StatusCard = styled('div')<{ isDelete?: boolean }>`
  background: ${props => props.isDelete ? '#fff5f5' : 'white'};
  border-radius: 0.5rem;
  padding: 1.5rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  border: 1px solid ${props => props.isDelete ? '#ff4444' : '#E5E5E5'};
  min-height: 80px;
  display: flex;
  align-items: center;
`;

const StatusChangeSection = styled('div')`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

const StatusText = styled('div')`
  color: #333;
  font-size: 0.875rem;
`;

const DeleteContent = styled('div')`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

const DeleteText = styled('div')`
  color: #333;
  font-size: 0.875rem;
  line-height: 1.4;
`;

const DeleteButton = styled(Button)`
  background: #ff4444;
  color: white;
  &:hover {
    background: #cc3333;
  }
`;