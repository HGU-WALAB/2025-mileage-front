import { useOpenModal } from '@/hooks';

import { useGetTopProjectQuery } from '@project/hooks/useGetTopProjectQuery';

import { GridSectionCard } from '../../components/GridSectionCard';
import { TopProjectContent } from '../../components/TopProjectContent';
import { TopProjectEditModal } from './TopProjectEditModal';

export const TopProjectSection = () => {
  const { topProject } = useGetTopProjectQuery();
  const { open, toggleModal } = useOpenModal(false);

  return (
    <GridSectionCard onClick={toggleModal}>
      <TopProjectContent topProject={topProject} />

      <TopProjectEditModal
        open={open}
        toggleModal={toggleModal}
        selectedProject={topProject}
      />
    </GridSectionCard>
  );
};
