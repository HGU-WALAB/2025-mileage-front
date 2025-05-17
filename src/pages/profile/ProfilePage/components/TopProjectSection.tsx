import { Flex, Heading } from '@/components';
import { useOpenModal } from '@/hooks';
import { boxShadow } from '@/styles/common';
import { styled } from '@mui/material';

import { useGetTopProjectQuery } from '@project/hooks/useGetTopProjectQuery';
import { TopProjectEditModal } from './TopProjectEditModal';

export const TopProjectSection = () => {
  const { topProject } = useGetTopProjectQuery();
  const { open, toggleModal } = useOpenModal(false);

  return (
    <S.Section onClick={toggleModal}>
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
        <Flex.Column>대표 프로젝트를 선택해주세요!</Flex.Column>
      )}

      <TopProjectEditModal
        open={open}
        toggleModal={toggleModal}
        selectedProject={topProject}
      />
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
