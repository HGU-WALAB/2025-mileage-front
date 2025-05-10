import { Flex, Heading, Text } from '@/components';
import { MAX_RESPONSIVE_WIDTH } from '@/constants/system';
import { getFormattedDateFullYear } from '@/utils/getDate';
import { styled } from '@mui/material';
import { useMediaQuery } from '@mui/system';
import ReactMarkdown from 'react-markdown';
import { useParams } from 'react-router-dom';
import remarkGfm from 'remark-gfm';

import { useGetProjectQuery } from '../hooks/useGetProjectQuery';

export const ProjectDetailSection = () => {
  const isMobile = useMediaQuery(MAX_RESPONSIVE_WIDTH);
  const { id } = useParams<{ id: string }>();
  const { project } = useGetProjectQuery(id ?? '');

  return (
    <Flex.Column gap="2rem" padding={isMobile ? '' : '0 2rem'}>
      <Flex.Row gap=".5rem" wrap={isMobile ? 'wrap' : 'nowrap'}>
        <Flex.Column gap="1rem" height="400px" justify="space-around">
          <Flex.Column gap=".25rem">
            <Heading as="h1">{project.name}</Heading>
            <Text style={{ fontSize: '.875rem' }}>
              기간 : {getFormattedDateFullYear(project.start_date)}{' '}
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
            <Text>{project.role}</Text>
          </Flex.Column>

          <Flex.Column gap=".25rem">
            <Heading as="h3">🔗 관련 링크</Heading>
            <S.LinkList gap="1rem">
              {project.deployed_link && (
                <a href={project.deployed_link}>서비스 바로가기</a>
              )}
              {project.github_link && <a href={project.github_link}>GitHub</a>}
              {project.blog_link && <a href={project.blog_link}>Blog</a>}
            </S.LinkList>
          </Flex.Column>

          <Flex.Column gap=".5rem">
            <Heading as="h3">🛠️ 기술 스택</Heading>
            <Flex.Row
              wrap="wrap"
              gap=".5rem"
              style={{ maxHeight: '50px', overflow: 'hidden' }}
            >
              {project.techStack.techStack.map((tech, index) => (
                <S.TechBadge as="span" key={index}>
                  {tech}
                </S.TechBadge>
              ))}
            </Flex.Row>
          </Flex.Column>
        </Flex.Column>

        {/* <S.MainImage src={`images/${project.thumbnail}`} alt="대표 이미지" /> */}
        <S.MainImage
          src={`https://www.hdec.kr/FileContents/EditorImg/20220307/%EC%82%AC%EC%A7%842%20copy_770.jpg`}
          alt="대표 이미지"
        />
      </Flex.Row>

      <Flex.Column gap="4rem" margin="2rem 0 6rem">
        <Flex.Column gap=".5rem">
          <Heading as="h3">🧩 주요 기여 및 역할</Heading>
          <ReactMarkdown
            remarkPlugins={[remarkGfm]}
            components={{
              p: ({ children }) => <S.Paragraph>{children}</S.Paragraph>,
            }}
          >
            {project.content}
          </ReactMarkdown>
        </Flex.Column>

        <Flex.Column gap=".5rem">
          <Heading as="h3">🏆 성과</Heading>
          <Text>{project.achievement}</Text>
        </Flex.Column>
      </Flex.Column>
    </Flex.Column>
  );
};

const S = {
  MainImage: styled('img')`
    border-radius: 0.75rem;
    max-height: 400px;
    object-fit: cover;
    width: 100%;
  `,
  LinkList: styled(Flex.Row)`
    a {
      color: #0070f3;
      text-decoration: underline;
    }
  `,
  TechBadge: styled(Text)`
    background-color: ${({ theme }) => theme.palette.primary.light};
    border-radius: 24px;
    color: ${({ theme }) => theme.palette.primary.main};
    font-size: 0.75rem;
    padding: 0.125rem 0.5rem;
  `,
  Paragraph: styled('p')`
    line-height: 1.8;
    margin-bottom: 1.25rem;
    white-space: pre-wrap;
  `,
};
