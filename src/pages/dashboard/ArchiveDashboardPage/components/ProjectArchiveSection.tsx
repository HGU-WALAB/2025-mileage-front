import { Flex, Title } from '@/components';
import { MAX_RESPONSIVE_WIDTH } from '@/constants/system';
import { styled, useMediaQuery } from '@mui/material';

import { useGetProjectsQuery } from '@project/hooks/useGetProjectsQuery';
import { ProjectCard } from '@project/ProjectListPage/components/ProjectCard';

import { ProjectPageForwardButton } from './ProjectPageForwardButton';

export const ProjectArchiveSection = () => {
  const isMobile = useMediaQuery(MAX_RESPONSIVE_WIDTH);
  const { projects } = useGetProjectsQuery();

  return (
    <Flex.Column as="section">
      <Title label="프로젝트" />

      <S.GridLayout isMobile={isMobile}>
        {projects.slice(0, isMobile ? 2 : 3).map(project => (
          <ProjectCard project={project} />
        ))}

        <ProjectPageForwardButton />
      </S.GridLayout>
    </Flex.Column>
  );
};

const S = {
  GridLayout: styled('div')<{ isMobile: boolean }>`
    display: grid;
    gap: 1rem;
    grid-template-columns: ${({ isMobile }) =>
      isMobile ? 'repeat(1, 1fr)' : 'repeat(4, 1fr)'};

    ${({ isMobile }) =>
      isMobile &&
      `
        & > *:last-of-type {
          order: -1;
        }
      `}
  `,
};
