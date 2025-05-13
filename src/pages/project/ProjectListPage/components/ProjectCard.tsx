import { Flex, Heading, Text } from '@/components';
import { ROUTE_PATH } from '@/constants/routePath';
import { getFormattedDateFullYear } from '@/utils/getDate';
import { styled } from '@mui/material';
import { useNavigate } from 'react-router-dom';

import { TechStackBadge } from '../../components/TechStackBadge';
import { ProjectResponse } from '../../types/project';

export const ProjectCard = ({ project }: { project: ProjectResponse }) => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(ROUTE_PATH.projectDetail(project.projectId));
  };

  return (
    <S.Card width="100%" height="320px" onClick={handleClick}>
      <S.Thumbnail
        src={`/images/${project.thumbnail}`}
        alt="프로젝트 대표 이미지"
      />
      <Flex.Column gap=".5rem" padding="1rem">
        <Flex.Row>
          <Heading as={'h3'}>{project.name}</Heading>
        </Flex.Row>

        <Text style={{ fontSize: '.875rem' }}>
          {getFormattedDateFullYear(project.start_date)}{' '}
          {project.end_date
            ? `→ ${getFormattedDateFullYear(project.end_date)}`
            : '→ ing'}
        </Text>

        <Flex.Row
          wrap="wrap"
          gap=".5rem"
          style={{ maxHeight: '50px', overflow: 'hidden' }}
        >
          {project.techStack.techStack?.map((tech, index) => (
            <TechStackBadge key={index} tech={tech} />
          ))}
        </Flex.Row>
      </Flex.Column>
    </S.Card>
  );
};

const S = {
  Card: styled(Flex.Column)`
    border-radius: 12px;
    box-shadow: 0 4px 12px rgb(0 0 0 / 10%);
    cursor: pointer;
    max-width: 360px;
    overflow: hidden;
    transition: box-shadow 0.2s ease;

    &:hover,
    &:active {
      box-shadow: 0 4px 12px rgb(0 0 0 / 20%);
    }
  `,
  Thumbnail: styled('img')`
    background-color: ${({ theme }) => theme.palette.primary.light};
    height: 180px;
    object-fit: cover;
    width: 100%;
  `,
  DateText: styled(Text)`
    background-color: ${({ theme }) => theme.palette.grey100};
    padding: 0.125rem 0.5rem;
  `,
};
