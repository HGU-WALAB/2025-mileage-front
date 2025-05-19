import { Flex, Heading, Text } from '@/components';
import { MAX_RESPONSIVE_WIDTH } from '@/constants/system';
import { getFormattedDateFullYear } from '@/utils/getDate';
import { styled, useMediaQuery } from '@mui/material';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

import { TechStackBadge } from '../../components/TechStackBadge';
import { EMPTY_MESSAGE } from '../../constants/system';
import { ProjectResponse } from '../../types/project';

export const ProjectDetailContent = ({
  project,
}: {
  project: ProjectResponse;
}) => {
  const isMobile = useMediaQuery(MAX_RESPONSIVE_WIDTH);

  return (
    <Flex.Column gap="2rem" padding={isMobile ? '' : '0 2rem'}>
      <Flex
        direction={isMobile ? 'column-reverse' : 'row'}
        width="100%"
        gap=".5rem"
        justify="space-between"
        wrap={isMobile ? 'wrap' : 'nowrap'}
      >
        <Flex.Column gap="1rem" height="400px" justify="space-around">
          <Flex.Column gap=".25rem">
            <Heading as="h1">{project.name}</Heading>
            <Text style={{ fontSize: '.875rem' }}>
              기간 :{' '}
              {project.start_date &&
                getFormattedDateFullYear(project.start_date)}{' '}
              {project.end_date
                ? `→ ${getFormattedDateFullYear(project.end_date)}`
                : '→ ing'}
            </Text>
          </Flex.Column>

          <Flex.Column gap=".25rem">
            <Heading as="h3">📌 프로젝트 설명</Heading>
            <Text>{project.description}</Text>
          </Flex.Column>

          <Flex.Column gap=".25rem">
            <Heading as="h3">🧑‍💻 맡은 역할</Heading>
            <Text>{project.role?.trim() || EMPTY_MESSAGE}</Text>
          </Flex.Column>

          <Flex.Column gap=".25rem">
            <Heading as="h3">🔗 관련 링크</Heading>
            {project.deployed_link ||
            project.github_link ||
            project.blog_link ? (
              <S.LinkList gap="1rem">
                {project.deployed_link && (
                  <a href={project.deployed_link}>서비스 바로가기</a>
                )}
                {project.github_link && (
                  <a href={project.github_link}>GitHub</a>
                )}
                {project.blog_link && <a href={project.blog_link}>Blog</a>}
              </S.LinkList>
            ) : (
              <Text>입력된 링크가 없습니다.</Text>
            )}
          </Flex.Column>

          <Flex.Column gap=".5rem">
            <Heading as="h3">🛠️ 기술 스택</Heading>
            {project.techStack.techStack?.length !== 0 ? (
              <Flex.Row
                wrap="wrap"
                gap=".5rem"
                style={{ maxHeight: '50px', overflow: 'hidden' }}
              >
                {project.techStack.techStack?.map((tech, index) => (
                  <TechStackBadge key={index} tech={tech} />
                ))}
              </Flex.Row>
            ) : (
              <Text>{EMPTY_MESSAGE}</Text>
            )}
          </Flex.Column>
        </Flex.Column>

        {project.thumbnail ? (
          <S.MainImage src={`images/${project.thumbnail}`} alt="대표 이미지" />
        ) : (
          <S.ImagePlaceholder width="100%" justify="center" align="center">
            이미지가 등록하지 않았어요 📷
          </S.ImagePlaceholder>
        )}
      </Flex>

      <Flex.Column gap="4rem" margin="2rem 0 6rem">
        <Flex.Column gap=".5rem">
          <Heading as="h3">🧩 주요 기여 및 역할</Heading>
          {project.content?.trim() ? (
            <ReactMarkdown
              remarkPlugins={[remarkGfm]}
              components={{
                p: ({ children }) => <S.Paragraph>{children}</S.Paragraph>,
              }}
            >
              {project.content}
            </ReactMarkdown>
          ) : (
            <Text>{EMPTY_MESSAGE}</Text>
          )}
        </Flex.Column>

        <Flex.Column gap=".5rem">
          <Heading as="h3">🏆 성과</Heading>
          <Text>{project.achievement?.trim() || EMPTY_MESSAGE}</Text>
        </Flex.Column>
      </Flex.Column>
    </Flex.Column>
  );
};

const S = {
  MainImage: styled('img')`
    background-color: ${({ theme }) => theme.palette.primary.light};
    border-radius: 0.75rem;
    max-height: 300px;
    max-width: 500px;
    object-fit: cover;
    width: 100%;
  `,
  LinkList: styled(Flex.Row)`
    a {
      color: #0070f3;
      text-decoration: underline;
    }
  `,
  Paragraph: styled('p')`
    line-height: 1.8;
    margin-bottom: 1.25rem;
    white-space: pre-wrap;
  `,
  ImagePlaceholder: styled(Flex.Row)`
    background-color: ${({ theme }) => theme.palette.grey[200]};
    border-radius: 0.75rem;
    color: ${({ theme }) => theme.palette.text.disabled};
    font-size: 1rem;
    max-height: 300px;
    max-width: 500px;
    text-align: center;
  `,
};
