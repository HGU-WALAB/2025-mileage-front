import { Flex, Heading } from '@/components';
import { ProjectResponse } from '@/pages/project/types/project';
import { styled } from '@mui/material';

export const TopProjectContent = ({
  topProject,
}: {
  topProject: ProjectResponse | null;
}) => {
  return (
    <Flex.Column height="100%" gap="1rem" justify="center" align="center">
      <S.LabelText>대표 프로젝트</S.LabelText>
      {topProject ? (
        <>
          <S.Thumbnail
            src={`/images/${topProject.thumbnail}`}
            alt="프로젝트 대표 이미지"
          />
          <Heading as="h4">{topProject.name}</Heading>
        </>
      ) : (
        <Flex.Column>대표 프로젝트를 아직 없어요!</Flex.Column>
      )}
    </Flex.Column>
  );
};

const S = {
  Thumbnail: styled('img')`
    background-color: ${({ theme }) => theme.palette.primary.light};
    border-radius: 1rem;
    height: 100px;
    object-fit: cover;
    width: 200px;
  `,
  LabelText: styled('p')`
    color: ${({ theme }) => theme.palette.primary.main};
    font-size: 1rem;
    font-weight: 600;
    margin: 0;
  `,
  MileageNumber: styled('p')`
    color: ${({ theme }) => theme.palette.primary.dark};
    font-size: 4rem;
    font-weight: 700;
    margin: 0;
  `,
};
