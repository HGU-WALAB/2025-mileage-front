import { Flex, Text, Heading } from '@/components';
import { GithubIcon, UserIcon } from '@/assets';
import { ProjectArchiveResponse } from '@project/types/projectArchive';
import { styled } from '@mui/material';
import { getFormattedDateFullYear } from '@/utils/getDate';

interface Props {
  project: ProjectArchiveResponse;
}

export const ProjectArchiveCard = ({ project }: Props) => {
  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active':
        return '#4CAF50'; // 녹색
      case 'inactive':
        return '#9E9E9E'; // 회색
      case 'finished':
        return '#2196F3'; // 파란색
      default:
        return '#9E9E9E';
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case 'active':
        return '진행';
      case 'inactive':
        return '보류';
      case 'finished':
        return '종료';
      default:
        return 'Unknown';
    }
  };

  const getDaysAgo = (startDate: string) => {
    const start = new Date(startDate);
    const now = new Date();
    const diffTime = Math.abs(now.getTime() - start.getTime());
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays;
  };

  return (
    <S.Card>
      <S.Header>
        <S.Title>{project.projectName}</S.Title>
        <S.StatusBadge status={project.status}>
          {getStatusText(project.status)}
        </S.StatusBadge>
      </S.Header>

      <S.RepositorySection>
        <GithubIcon width={16} height={16} />
        <Text>{project.repositoryName}</Text>
      </S.RepositorySection>

      <S.DateSection>
        <S.CalendarIcon>📅</S.CalendarIcon>
        <Text>Started {getFormattedDateFullYear(project.startDate)}</Text>
      </S.DateSection>

      <S.TechStackSection>
        {project.techStack.slice(0, 4).map((tech, index) => (
          <S.TechBadge key={index}>{tech}</S.TechBadge>
        ))}
        {project.techStack.length > 4 && (
          <S.TechBadge>+{project.techStack.length - 3} more</S.TechBadge>
        )}
      </S.TechStackSection>

      <S.ActionSection>
        <S.ViewDetailsButton>프로젝트 더보기</S.ViewDetailsButton>
        <S.CopyButton>
          <S.CopyIcon>📊</S.CopyIcon>
        </S.CopyButton>
      </S.ActionSection>
    </S.Card>
  );
};

const S = {
  Card: styled(Flex.Column)`
    background-color: white;
    border-radius: 12px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
    padding: 1.25rem;
    gap: 0.75rem;
    width: 100%;
    height: 280px;
    transition: box-shadow 0.2s ease;

    @media (max-width: 1400px) and (min-width: 901px) {
      height: 320px;
    }

    @media (max-width: 1200px) and (min-width: 901px) {
      height: 340px;
    }

    @media (max-width: 900px) {
      height: 260px;
      padding: 1rem;
      gap: 0.5rem;
    }

    &:hover {
      box-shadow: 0 4px 16px rgba(0, 0, 0, 0.15);
    }
  `,

  Header: styled(Flex.Row)`
    justify-content: space-between;
    align-items: flex-start;
    margin-bottom: 0.5rem;
  `,

  Title: styled(Heading)`
    font-size: 1.25rem;
    font-weight: bold;
    color: #333;
    margin: 0;
    flex: 1;
    line-height: 1.3;
  `,

  StatusBadge: styled('span')<{ status: string }>`
    background-color: ${({ status }) => {
      switch (status) {
        case 'active':
          return '#E8F5E8';
        case 'inactive':
          return '#F5F5F5';
        case 'finished':
          return '#E3F2FD';
        default:
          return '#F5F5F5';
      }
    }};
    color: ${({ status }) => {
      switch (status) {
        case 'active':
          return '#4CAF50';
        case 'inactive':
          return '#9E9E9E';
        case 'finished':
          return '#2196F3';
        default:
          return '#9E9E9E';
      }
    }};
    padding: 0.25rem 0.75rem;
    border-radius: 16px;
    font-size: 0.75rem;
    font-weight: 500;
    white-space: nowrap;
  `,

  RepositorySection: styled(Flex.Row)`
    gap: 0.5rem;
    align-items: center;
    color: #666;
    font-size: 0.875rem;
    margin-bottom: 0.25rem;
  `,

  DateSection: styled(Flex.Row)`
    gap: 0.5rem;
    align-items: center;
    color: #666;
    font-size: 0.875rem;
    margin-bottom: 0.5rem;
  `,

  CalendarIcon: styled('span')`
    font-size: 0.875rem;
  `,

  TechStackSection: styled(Flex.Row)`
    gap: 0.5rem;
    flex-wrap: wrap;
    margin-top: 0.5rem;
    margin-bottom: 0.75rem;
  `,

  TechBadge: styled('span')`
    background-color: #E3F2FD;
    color: #1976D2;
    padding: 0.25rem 0.75rem;
    border-radius: 12px;
    font-size: 0.75rem;
    font-weight: 500;
  `,

  ActionSection: styled(Flex.Row)`
    gap: 0.75rem;
    margin-top: auto;
  `,

  ViewDetailsButton: styled('button')`
    background-color: #537FF1;
    color: white;
    border: none;
    border-radius: 8px;
    padding: 0.75rem 1.5rem;
    font-size: 0.875rem;
    font-weight: 600;
    cursor: pointer;
    flex: 1;
    transition: background-color 0.2s ease;

    &:hover {
      background-color: #4b73d8;
    }
  `,

  CopyButton: styled('button')`
    background-color: white;
    border: 1px solid #E0E0E0;
    border-radius: 8px;
    padding: 0.75rem;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: background-color 0.2s ease;

    &:hover {
      background-color: #F5F5F5;
    }
  `,

  CopyIcon: styled('span')`
    font-size: 1rem;
  `,
};
