import { useParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { getProjectDetail } from '../apis/project';
import ProjectDetailOverview from './ProjectDetailOverview.tsx';
import ProjectDetailSettings from './ProjectDetailSettings.tsx';
import ProjectDetailLogs from './ProjectDetailLogs.tsx';
import { Heading, Tabs } from '@/components';
import { TabItem } from '@/types/tab';
import { useState } from 'react';
import { Flex, Text, Button } from '@/components';
import { ArrowLeftIcon } from '@/assets';
import { useNavigate } from 'react-router-dom';

const ProjectDetailPage = () => {
  const { projectId } = useParams<{ projectId: string }>();
  const navigate = useNavigate();
  const [selectedTab, setSelectedTab] = useState<TabItem>({ text: '프로젝트 개요', value: 'overview' });

  const { data: projectDetail, isLoading, error } = useQuery({
    queryKey: ['projectDetail', projectId],
    queryFn: () => getProjectDetail({ projectId: projectId! }),
    enabled: !!projectId,
  });

  const tabList: TabItem[] = [
    { text: '프로젝트 개요', value: 'overview' },
    { text: '로그 (0)', value: 'logs' },
    { text: '프로젝트 설정', value: 'settings' },
  ];

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    console.error('Project detail error:', error);
    return <div>Error loading project: {error.message}</div>;
  }

  if (!projectDetail) {
    return <div>Project not found</div>;
  }

  const handleBack = () => {
    navigate(-1);
  };

  const renderTabContent = () => {
    switch (selectedTab.value) {
      case 'overview':
        return <ProjectDetailOverview projectDetail={projectDetail} />;
      case 'logs':
        return <ProjectDetailLogs />;
      case 'settings':
        return <ProjectDetailSettings projectDetail={projectDetail} />;
      default:
        return <ProjectDetailOverview projectDetail={projectDetail} />;
    }
  };

  return (
    <div style={{ 
      display: 'flex', 
      flexDirection: 'column', 
      gap: '2rem', 
      padding: '2rem', 
      maxWidth: '1200px', 
      margin: '0 auto',
      minHeight: '100vh'
    }}>
      {/* Header */}
      <Flex.Column gap="2rem">
        {/* 뒤로가기 버튼 */}
        <Button
          label="뒤로가기"
          variant="outlined"
          icon={ArrowLeftIcon}
          onClick={handleBack}
          style={{ 
            alignSelf: 'flex-start',
            padding: '18px 24px',
            fontSize: '0.875rem',
            minWidth: '120px'
          }}
        />
        
        {/* 프로젝트 정보와 Generate Report 버튼 */}
        <Flex.Row justify="space-between" align="flex-start">
          <Flex.Column gap="0.5rem">
            <Flex.Row gap="1rem" align="center">
              <Heading as="h3" style={{ fontSize: '1.5rem' }}>{projectDetail.name}</Heading>
              <div
                style={{
                  padding: '4px 12px',
                  borderRadius: '20px',
                  backgroundColor: projectDetail.status === 'ongoing' ? '#E8F5E8' : 
                                  projectDetail.status === 'stopped' ? '#FFF8E1' : '#F5F5F5',
                  color: projectDetail.status === 'ongoing' ? '#4CAF50' : 
                         projectDetail.status === 'stopped' ? '#FF9800' : '#757575',
                  fontSize: '0.75rem',
                  fontWeight: '500',
                  border: 'none',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}
              >
                {projectDetail.status === 'ongoing' ? '진행' : 
                 projectDetail.status === 'stopped' ? '중단' : '완료'}
              </div>
            </Flex.Row>
            <Text color="grey500" style={{ fontSize: '0.875rem' }}>
              {projectDetail.description}
            </Text>
          </Flex.Column>
          <Button
            label="리포트 생성하기"
            variant="contained"
            color="blue"
            size="medium"
          />
        </Flex.Row>
      </Flex.Column>

      {/* Tab Content Container */}
      <div style={{
        backgroundColor: 'white',
        borderRadius: '0.5rem',
        boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
        border: '1px solid #E5E5E5',
        overflow: 'hidden'
      }}>
        {/* Tabs */}
        <Tabs
          selectedValue={selectedTab}
          handleSelect={setSelectedTab}
          tabList={tabList}
        />

        {/* Tab Content */}
        <div style={{
          padding: '1.5rem'
        }}>
          {renderTabContent()}
        </div>
      </div>
    </div>
  );
};

export default ProjectDetailPage;
