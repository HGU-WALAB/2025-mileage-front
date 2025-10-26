import { Flex, Text } from '@/components';
import { styled } from '@mui/material';

const ProjectDetailLogs = () => {
  return (
    <LogsContainer>
      <LogCard>
        <EmptyState>
          <Text style={{ fontSize: '1rem', color: '#64748b', marginBottom: '0.5rem' }}>
          프로젝트 활동 로그가 여기에 표시됩니다. <br />
          로그를 추가하여 프로젝트 활동을 기록할 수 있어요
          </Text>
        </EmptyState>
      </LogCard>
    </LogsContainer>
  );
};

export default ProjectDetailLogs;

const LogsContainer = styled('div')`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 100%;
`;

const LogCard = styled('div')`
  background: white;
  border: 1px solid #e5e7eb;
  border-radius: 0.5rem;
  padding: 1rem;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1);
  width: 100%;
`;

const EmptyState = styled('div')`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 3rem 2rem;
  background: #F8F9FA;
  border-radius: 0.5rem;
  border: 2px dashed #DEE2E6;
  color: #64748b;
  font-size: 0.875rem;
  text-align: center;
  line-height: 1.6;
  min-height: 200px;
  width: 100%;
`;