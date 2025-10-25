import { ProjectDetailResponse } from '../types/projectDetail';
import { Flex, Text } from '@/components';
import { styled } from '@mui/material';

interface Props {
  projectDetail: ProjectDetailResponse;
}

const OverviewContainer = styled('div')`
  display: flex;
  gap: 2rem;
  width: 100%;
  
  @media (max-width: 900px) {
    flex-direction: column;
  }
`;

const LeftColumn = styled('div')`
  flex: 6;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const RightColumn = styled('div')`
  flex: 4;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const SectionCard = styled('div')`
  background: white;
  border-radius: 0.5rem;
  padding: 1.5rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  border: 1px solid #E5E5E5;
`;

const ProjectImage = styled('div')`
  width: 100%;
  height: 200px;
  background: #f5f5f5;
  border-radius: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 2px dashed #ddd;
  position: relative;
`;

const CameraIcon = styled('div')`
  font-size: 2rem;
  color: #979797;
`;

const TechStackContainer = styled('div')`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
`;

const TechStackTag = styled('div')`
  background: #E8EEFC;
  color: #537FF1;
  padding: 0.25rem 0.75rem;
  border-radius: 1rem;
  font-size: 0.875rem;
`;

const LogCard = styled('div')`
  background: white;
  border-radius: 0.5rem;
  padding: 1rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  margin-bottom: 0.5rem;
`;

const DashboardSection = styled('div')`
  margin-bottom: 1.5rem;
`;

const ChartPlaceholder = styled('div')`
  background: #f5f5f5;
  border-radius: 0.5rem;
  padding: 1rem;
  color: #979797;
  font-size: 0.875rem;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ContributorsTable = styled('div')`
  background: #f5f5f5;
  border-radius: 0.5rem;
  padding: 1rem;
  color: #979797;
  font-size: 0.875rem;
  font-family: monospace;
`;

const ProjectDetailOverview = ({ projectDetail }: Props) => {
  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('ko-KR', {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
    });
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case 'ongoing':
        return '진행중';
      case 'stopped':
        return '중단';
      case 'finished':
        return '완료';
      default:
        return status;
    }
  };

  return (
    <OverviewContainer>
      <LeftColumn>
        {/* 최근 로그 섹션 */}
        <SectionCard>
          <Text as="h6" bold style={{ marginBottom: '1rem' }}>
            최근 로그
          </Text>
          <Flex.Column gap="0.5rem">
            <LogCard>
              <div style={{ color: '#979797', fontSize: '0.875rem', marginBottom: '0.5rem' }}>
                yyyy/mm/dd
              </div>
              <div style={{ color: '#979797', fontSize: '0.875rem' }}>
                의사결정 이유의사결정 이유의사결정 이유의사결정 이유의사결정 이유의사결정 이유의사결정 이유의사결정 이유의사결정 이유의사결정 이유....
              </div>
            </LogCard>
            <LogCard>
              <div style={{ color: '#979797', fontSize: '0.875rem', marginBottom: '0.5rem' }}>
                yyyy/mm/dd
              </div>
              <div style={{ color: '#979797', fontSize: '0.875rem' }}>
                의사결정 이유의사결정 이유의사결정 이유의사결정 이유의사결정 이유의사결정 이유의사결정 이유의사결정 이유의사결정 이유의사결정 이유....
              </div>
            </LogCard>
          </Flex.Column>
        </SectionCard>

        {/* GitHub Activity Dashboard 섹션 */}
        <SectionCard>
          <Text as="h6" bold style={{ marginBottom: '1rem' }}>
            GitHub Activity Dashboard
          </Text>
          
          {/* Top Contributors */}
          <DashboardSection>
            <Text as="h6" style={{ marginBottom: '0.5rem' }}>
              Top Contributors
            </Text>
            <ContributorsTable>
              Rank | User | Commits | Additions<br/>
              1 Alice 120 4,200<br/>
              2 Bob 90 3,000<br/>
              3 Carol 70 2,300
            </ContributorsTable>
          </DashboardSection>

          {/* Weekly Commits */}
          <DashboardSection>
            <Text as="h6" style={{ marginBottom: '0.5rem' }}>
              Weekly Commits
            </Text>
            <ChartPlaceholder>
              Line Chart Placeholder
            </ChartPlaceholder>
          </DashboardSection>

          {/* Contributor Stats */}
          <DashboardSection>
            <Text as="h6" style={{ marginBottom: '0.5rem' }}>
              Contributor Stats
            </Text>
            <ChartPlaceholder>
              Bar Chart Placeholder
            </ChartPlaceholder>
          </DashboardSection>
        </SectionCard>
      </LeftColumn>

      <RightColumn>
        {/* 프로젝트 이미지 */}
        <ProjectImage>
          <CameraIcon>📷</CameraIcon>
        </ProjectImage>

        {/* 프로젝트 정보 */}
        <SectionCard>
          <Text as="h6" bold style={{ marginBottom: '1rem' }}>
            프로젝트 정보
          </Text>
          <Flex.Column gap="0.5rem">
            <Flex.Row justify="space-between">
              <Text color="grey500">시작일:</Text>
              <Text>{formatDate(projectDetail.start_date)}</Text>
            </Flex.Row>
            <Flex.Row justify="space-between">
              <Text color="grey500">상태:</Text>
              <Text>{getStatusText(projectDetail.status)}</Text>
            </Flex.Row>
          </Flex.Column>
        </SectionCard>

        {/* 깃허브 정보 */}
        <SectionCard>
          <Text as="h6" bold style={{ marginBottom: '1rem' }}>
            깃허브 정보
          </Text>
          <Flex.Column gap="0.5rem">
            <Flex.Row justify="space-between">
              <Text color="grey500">Repository:</Text>
              <Text style={{ maxWidth: '150px', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                {projectDetail.github_link}
              </Text>
            </Flex.Row>
            <Flex.Row justify="space-between">
              <Text color="grey500">ID:</Text>
              <Text>{projectDetail.github_id}</Text>
            </Flex.Row>
          </Flex.Column>
        </SectionCard>

        {/* 기술 스택 */}
        <SectionCard>
          <Text as="h6" bold style={{ marginBottom: '1rem' }}>
            기술 스택
          </Text>
          <TechStackContainer>
            {projectDetail.techStack.map((tech, index) => (
              <TechStackTag key={index}>
                {tech}
              </TechStackTag>
            ))}
          </TechStackContainer>
        </SectionCard>
      </RightColumn>
    </OverviewContainer>
  );
};

export default ProjectDetailOverview;
