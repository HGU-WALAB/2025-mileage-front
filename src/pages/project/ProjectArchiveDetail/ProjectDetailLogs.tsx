import { Flex, Text } from '@/components';
import { styled } from '@mui/material';

const ProjectDetailLogs = () => {
  return (
    <LogsContainer>
      <LogCard>
        <Flex.Column gap="1rem" align="center" style={{ padding: '2rem' }}>
          <Text as="h6" color="grey500">
            로그가 없습니다
          </Text>
          <Text color="grey400">
            프로젝트 활동 로그가 여기에 표시됩니다.
          </Text>
        </Flex.Column>
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
  border-radius: 0.5rem;
  padding: 1.5rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;