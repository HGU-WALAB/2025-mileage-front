import { Text } from '@/components';
import { styled } from '@mui/material';
import { GitHubActivityData } from '../../types/github';

interface Props {
  githubLink: string;
  githubActivityData: GitHubActivityData | null;
  isLoading: boolean;
  error: string | null;
}

const GitHubActivityDashboard = ({ githubLink, githubActivityData, isLoading, error }: Props) => {

  if (isLoading) {
    return (
      <DashboardContainer>
        <LoadingState>
          <Text style={{ fontSize: '1rem', color: '#6b7280' }}>
            GitHub 데이터를 불러오는 중...
          </Text>
        </LoadingState>
      </DashboardContainer>
    );
  }

  if (error) {
    return (
      <DashboardContainer>
        <ErrorState>
          <Text style={{ fontSize: '1rem', color: '#dc2626', marginBottom: '0.5rem' }}>
            오류가 발생했습니다
          </Text>
          <Text style={{ fontSize: '0.875rem', color: '#6b7280' }}>
            {error}
          </Text>
        </ErrorState>
      </DashboardContainer>
    );
  }

  if (!githubActivityData) {
    return (
      <DashboardContainer>
        <EmptyState>
          <Text style={{ fontSize: '1rem', color: '#64748b', marginBottom: '0.5rem' }}>
            레파지토리 링크를 추가해주세요
          </Text>
          <Text style={{ fontSize: '0.875rem', color: '#9ca3af' }}>
            레파지토리 링크를 추가하면 더 많은 정보를 확인할 수 있어요
          </Text>
        </EmptyState>
      </DashboardContainer>
    );
  }

  const { repository, contributors, commitActivity, contributorStats } = githubActivityData;

  // 주별 커밋 데이터 준비
  const weeklyCommitsData = commitActivity.slice(-12).map((week, index) => ({
    week: `Week ${index + 1}`,
    commits: week.total,
  }));

  // Top Contributors 데이터 준비 (3명만)
  const topContributors = contributors.slice(0, 3);

  // 실제 additions 값을 계산하는 함수
  const getContributorAdditions = (contributorLogin: string) => {
    const contributorStat = contributorStats.find(stat => stat.author.login === contributorLogin);
    if (!contributorStat) return 0;
    
    // 모든 주의 additions 합계 계산
    return contributorStat.weeks.reduce((total, week) => total + week.a, 0);
  };

  return (
    <DashboardContainer>
      <DashboardHeader>
        <Text as="h4" style={{ fontSize: '1.25rem' }}>
          GitHub Activity Dashboard
        </Text>
      </DashboardHeader>

      <DashboardContent>
        {/* Top Contributors */}
        <ContributorsTableCard>
          <CardHeader>
            <Text as="h6" bold style={{ fontSize: '1rem', color: '#2c3e50' }}>
              기여자 통계
            </Text>
          </CardHeader>
          <TableContainer>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHeaderCell>순위</TableHeaderCell>
                  <TableHeaderCell>이름</TableHeaderCell>
                  <TableHeaderCell>총 커밋 수</TableHeaderCell>
                  <TableHeaderCell>추가</TableHeaderCell>
                </TableRow>
              </TableHeader>
              <TableBody>
                {topContributors.map((contributor, index) => (
                  <TableRow key={contributor.login}>
                    <TableDataCell>
                      <RankIcon rank={index + 1}>
                        {index === 0 ? '🥇' : index === 1 ? '🥈' : index === 2 ? '🥉' : index + 1}
                      </RankIcon>
                    </TableDataCell>
                    <TableDataCell>
                      <UserInfo>
                        <ContributorAvatar src={contributor.avatar_url} alt={contributor.login} />
                        <Text style={{ fontSize: '0.875rem', fontWeight: '500' }}>
                          {contributor.login}
                        </Text>
                      </UserInfo>
                    </TableDataCell>
                    <TableDataCell>
                      <Text style={{ fontSize: '0.875rem', fontWeight: '600' }}>
                        {contributor.contributions.toLocaleString()}
                      </Text>
                    </TableDataCell>
                    <TableDataCell>
                      <Text style={{ fontSize: '0.875rem', fontWeight: '600', color: '#28a745' }}>
                        {getContributorAdditions(contributor.login).toLocaleString()}
                      </Text>
                    </TableDataCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </ContributorsTableCard>

        {/* Weekly Commits 라인 차트 */}
        <WeeklyCommitsCard>
          <CardHeader>
            <Text as="h6" bold style={{ fontSize: '1rem', color: '#2c3e50' }}>
              주별 커밋 통계
            </Text>
          </CardHeader>
          <ChartContainer>
            <WeeklyCommitsChart data={weeklyCommitsData} />
          </ChartContainer>
        </WeeklyCommitsCard>

        {/* Repository 정보 및 링크 */}
        <RepositoryInfoCard>
          <CardHeader>
            <Text as="h6" bold style={{ fontSize: '1rem', color: '#2c3e50' }}>
              레파지토리 정보
            </Text>
          </CardHeader>
          <RepositoryInfo>
            <InfoRow>
              <InfoLabel>언어:</InfoLabel>
              <InfoValue>{repository.language || 'N/A'}</InfoValue>
            </InfoRow>
            <InfoRow>
              <InfoLabel>스타:</InfoLabel>
              <InfoValue>{repository.stargazers_count.toLocaleString()}</InfoValue>
            </InfoRow>
            <InfoRow>
              <InfoLabel>포크:</InfoLabel>
              <InfoValue>{repository.forks_count.toLocaleString()}</InfoValue>
            </InfoRow>
            <InfoRow>
              <InfoLabel>이슈:</InfoLabel>
              <InfoValue>{repository.open_issues_count.toLocaleString()}</InfoValue>
            </InfoRow>
          </RepositoryInfo>
          <GitHubButton
            onClick={() => window.open(githubLink, '_blank')}
          >
            레파지토리 바로가기
          </GitHubButton>
        </RepositoryInfoCard>
      </DashboardContent>
    </DashboardContainer>
  );
};

export default GitHubActivityDashboard;

// Weekly Commits 라인 차트 컴포넌트
const WeeklyCommitsChart = ({ data }: { data: { week: string; commits: number }[] }) => {
  const maxCommits = Math.max(...data.map(d => d.commits));
  
  return (
    <LineChartContainer>
      <LineChartSvg viewBox="0 0 650 400" preserveAspectRatio="xMidYMid slice">
        <defs>
          <linearGradient id="commitsGradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.3"/>
            <stop offset="100%" stopColor="#3b82f6" stopOpacity="0.3"/>
          </linearGradient>
        </defs>
        
        {/* 그리드 라인 */}
        {[0, 20, 40, 60, 80, 100].map((percent, index) => (
          <g key={index}>
            <line
              x1="70"
              y1={240 - (percent / 100) * 180}
              x2="580"
              y2={240 - (percent / 100) * 180}
              stroke="#f3f4f6"
              strokeWidth="1"
            />
            <text
              x="62"
              y={240 - (percent / 100) * 180 + 4}
              fontSize="12"
              fill="#6b7280"
              textAnchor="end"
            >
              {Math.round((maxCommits * percent) / 100)}
            </text>
          </g>
        ))}
        
        {/* 세로 그리드 라인 */}
        {data.map((_, index) => {
          const x = 70 + (index * 510) / (data.length - 1);
          return (
            <line
              key={`vline-${index}`}
              x1={x}
              y1="60"
              x2={x}
              y2="240"
              stroke="#f3f4f6"
              strokeWidth="1"
            />
          );
        })}
        
        {/* 영역 채우기 */}
        <polygon
          points={`70,240 ${data.map((item, index) => {
            const x = 70 + (index * 510) / (data.length - 1);
            const y = 240 - (180 * (item.commits / maxCommits));
            return `${x},${y}`;
          }).join(' ')} 580,240`}
          fill="url(#commitsGradient)"
        />
        
        {/* 데이터 포인트와 라인 */}
        {data.map((item, index) => {
          if (index === 0) return null;
          const prevItem = data[index - 1];
          const x1 = 70 + ((index - 1) * 510) / (data.length - 1);
          const y1 = 240 - (180 * (prevItem.commits / maxCommits));
          const x2 = 70 + (index * 510) / (data.length - 1);
          const y2 = 240 - (180 * (item.commits / maxCommits));
          
          return (
            <line
              key={`line-${index}`}
              x1={x1}
              y1={y1}
              x2={x2}
              y2={y2}
              stroke="#3b82f6"
              strokeWidth="2"
              strokeLinecap="round"
            />
          );
        })}
        
        {/* 데이터 포인트 */}
        {data.map((item, index) => {
          const x = 70 + (index * 510) / (data.length - 1);
          const y = 240 - (180 * (item.commits / maxCommits));
          return (
            <g key={index}>
              <circle
                cx={x}
                cy={y}
                r="5"
                fill="#3b82f6"
                stroke="white"
                strokeWidth="2"
              />
              <text
                x={x}
                y={y - 12}
                fontSize="11"
                fill="#374151"
                textAnchor="middle"
                fontWeight="500"
              >
                {item.commits}
              </text>
            </g>
          );
        })}
        
        {/* X축 라벨 */}
        {data.map((item, index) => {
          const x = 70 + (index * 510) / (data.length - 1);
          return (
            <text
              key={index}
              x={x}
              y="270"
              fontSize="10"
              fill="#6b7280"
              textAnchor="middle"
            >
              {item.week}
            </text>
          );
        })}
      </LineChartSvg>
    </LineChartContainer>
  );
};

// 스타일 컴포넌트들
const DashboardContainer = styled('div')`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  background: white;

  width: 100%;
`;

const DashboardHeader = styled('div')`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1rem;
`;

const DashboardContent = styled('div')`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 100%;
`;

const ContributorsTableCard = styled('div')`
  background: white;
  border: 1px solid #e5e7eb;
  border-radius: 0.5rem;
  padding: 1rem;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1);
`;

const WeeklyCommitsCard = styled('div')`
  background: white;
  border: 1px solid #e5e7eb;
  border-radius: 0.5rem;
  padding: 1rem;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1);
`;

const RepositoryInfoCard = styled('div')`
  background: white;
  border: 1px solid #e5e7eb;
  border-radius: 0.5rem;
  padding: 1rem;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1);
`;

const CardHeader = styled('div')`
  margin-bottom: 0.75rem;
  padding-bottom: 0.5rem;
  border-bottom: 1px solid #f3f4f6;
`;

const TableContainer = styled('div')`
  overflow-x: auto;
  width: 100%;
`;

const Table = styled('table')`
  width: 100%;
  min-width: 500px;
  border-collapse: collapse;
`;

const TableHeader = styled('thead')`
  background: #E8EEFC;
`;

const TableRow = styled('tr')`
  border-bottom: 1px solid #e5e7eb;
  
  &:hover:not(thead tr) {
    background: #f9fafb;
  }
`;

const TableHeaderCell = styled('th')`
  padding: 0.75rem;
  text-align: left;
  font-size: 0.875rem;
  font-weight: 600;
  color: #374151;
  vertical-align: middle;
`;

const TableBody = styled('tbody')``;

const TableDataCell = styled('td')`
  padding: 0.75rem;
  font-size: 0.875rem;
  vertical-align: middle;
`;

const RankIcon = styled('span')<{ rank: number }>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 24px;
  height: 24px;
  border-radius: 50%;
  background: ${props => 
    props.rank === 1 ? '#fbbf24' : 
    props.rank === 2 ? '#9ca3af' : 
    props.rank === 3 ? '#cd7f32' : '#e5e7eb'
  };
  color: ${props => props.rank <= 3 ? 'white' : '#6b7280'};
  font-size: 0.75rem;
  font-weight: 600;
`;

const UserInfo = styled('div')`
  display: flex;
  align-items: center;
  gap: 0.75rem;
`;

const ContributorAvatar = styled('img')`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  border: 2px solid #e5e7eb;
`;

const ChartContainer = styled('div')`
  height: 200px;
  width: 100%;
  margin-top: 0.5rem;
`;

const LineChartContainer = styled('div')`
  width: 100%;
  height: 300px;
  min-height: 300px;
`;

const LineChartSvg = styled('svg')`
  width: 100%;
  height: 100%;
  max-width: 100%;
`;


const RepositoryInfo = styled('div')`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  margin-bottom: 1.5rem;
`;

const InfoRow = styled('div')`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem 0;
  border-bottom: 1px solid #f3f4f6;
`;

const InfoLabel = styled('span')`
  font-size: 0.875rem;
  color: #6b7280;
  font-weight: 500;
`;

const InfoValue = styled('span')`
  font-size: 0.875rem;
  color: #374151;
  font-weight: 600;
`;

const GitHubButton = styled('button')`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.75rem 1.5rem;
  background: #f8fafc;
  border: 1px solid #4880FF;
  border-radius: 0.5rem;
  color: #4880FF;
  font-size: 0.875rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease;
  width: 100%;
  justify-content: center;
  
  &:hover {
    background: #4880FF;
    color: white;
  }
`;


const LoadingState = styled('div')`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 3rem 2rem;
  background: #f8fafc;
  border-radius: 0.5rem;
  border: 1px solid #e5e7eb;
  min-height: 200px;
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

const ErrorState = styled('div')`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 3rem 2rem;
  background: #fef2f2;
  border-radius: 0.5rem;
  border: 1px solid #fecaca;
  color: #dc2626;
  font-size: 0.875rem;
  text-align: center;
  line-height: 1.6;
  min-height: 200px;
  width: 100%;
`;