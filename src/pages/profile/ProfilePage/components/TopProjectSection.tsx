import { useOpenModal } from '@/hooks';

import { useGetTopProjectQuery } from '@project/hooks/useGetTopProjectQuery';

import { styled } from '@mui/material';
import { GridSectionCard } from '../../components/GridSectionCard';
import { TopProjectContent } from '../../components/TopProjectContent';
import { TopProjectEditModal } from './TopProjectEditModal';

export const TopProjectSection = () => {
  const { topProject } = useGetTopProjectQuery();
  const { open, toggleModal } = useOpenModal(false);

  return (
    <GridSectionCard>
      <TopProjectContent topProject={topProject} />

      <S.EditButton onClick={toggleModal}>편집하기</S.EditButton>
      <TopProjectEditModal
        open={open}
        toggleModal={toggleModal}
        selectedProject={topProject}
      />
    </GridSectionCard>
  );
};

const S = {
  EditButton: styled('button')`
    border: none;
    color: ${({ theme }) => theme.palette.primary.main};
    cursor: pointer;
    font-size: 0.875rem;
    padding: 0.5rem 1rem;
    position: absolute;
    right: 0.5rem;
    text-decoration: underline;
    top: 0.5rem;

    &:hover {
      color: ${({ theme }) => theme.palette.primary.dark};
    }
  `,
};
