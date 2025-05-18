import { useOpenModal } from '@/hooks';

import { GridSectionCard } from '../../components/GridSectionCard';
import { TopProjectContent } from '../../components/TopProjectContent';
import { useGetShareTopProjectQuery } from '../../hooks/useGetShareTopProjectQuery';
import { TopProjectDetailModal } from './TopProjectDetailModal';

export const TopProjectSection = () => {
  const { topProject } = useGetShareTopProjectQuery();
  const { open, toggleModal } = useOpenModal(false);

  return (
    <GridSectionCard onClick={toggleModal}>
      <TopProjectContent topProject={topProject} />

      {topProject && (
        <TopProjectDetailModal
          open={open}
          toggleModal={toggleModal}
          project={topProject}
        />
      )}
    </GridSectionCard>
  );
};
