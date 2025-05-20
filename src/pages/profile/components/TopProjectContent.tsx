import { Flex, Heading } from '@/components';
import { useGetThumbnailQuery } from '@/pages/project/hooks/useGetProjectQuery';
import { ProjectResponse } from '@/pages/project/types/project';
import { styled } from '@mui/material';

export const TopProjectContent = ({
  topProject,
}: {
  topProject: ProjectResponse | null;
}) => {
  const { thumbnail } = useGetThumbnailQuery(topProject?.thumbnail ?? '');

  return (
    <Flex.Column height="100%" gap="1rem" justify="center" align="center">
      <S.LabelText>대표 프로젝트</S.LabelText>
      {topProject ? (
        <>
          {thumbnail ? (
            <S.Thumbnail
              src={thumbnail}
              alt="프로젝트 대표 이미지"
            />
          ) : ( 
            <S.ImagePlaceholder
              width="100%"
              height="180px"
              justify="center"
              align="center"
            >
              이미지가 등록되지 않았어요 📷
            </S.ImagePlaceholder>
          )}
          <Heading as="h4">{topProject?.name}</Heading>
        </>
      ) : (
        <Flex.Column>대표 프로젝트가 아직 없어요!</Flex.Column>
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
  ImagePlaceholder: styled(Flex.Row)`
    background-color: ${({ theme }) => theme.palette.grey[200]};
    color: ${({ theme }) => theme.palette.text.disabled};
    font-size: 1rem;
    text-align: center;
    border-radius: 1rem;
  `,
};
