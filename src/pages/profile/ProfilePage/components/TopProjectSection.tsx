import { Heading } from '@/components';
import { useGetProjectsQuery } from '@/pages/project/hooks/useGetProjectsQuery';
import { boxShadow } from '@/styles/common';
import { styled } from '@mui/material';

export const TopProjectSection = () => {
  const { projects } = useGetProjectsQuery();

  return (
    <S.Section>
      <S.LabelText>대표 프로젝트</S.LabelText>
      <S.Thumbnail
        src={`${projects[0].thumbnail}`}
        alt="프로젝트 대표 이미지"
      />
      <Heading as={'h4'}>{projects[0].name}</Heading>
    </S.Section>
  );
};

const S = {
  Section: styled('div')`
    align-items: center;
    background-color: ${({ theme }) => theme.palette.variant.default};
    border-radius: 1rem;
    cursor: pointer;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    height: 250px;
    justify-content: center;
    padding: 2rem;
    ${boxShadow};
    width: 100%;

    &:hover,
    &:active {
      background-color: ${({ theme }) => theme.palette.variant.grey};
    }
  `,
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
