import { GridSectionCard } from '../../components/GridSectionCard';
import { TopProjectContent } from '../../components/TopProjectContent';
import { useGetShareTopProjectQuery } from '../../hooks/useGetShareTopProjectQuery';

export const TopProjectSection = () => {
  const { topProject } = useGetShareTopProjectQuery();

  return (
    <GridSectionCard>
      <TopProjectContent topProject={topProject} />
    </GridSectionCard>
  );
};
