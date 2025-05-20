import { GridSectionCard } from '../../components/GridSectionCard';
import { TechStackContent } from '../../components/TechStackContent';
import { useGetShareTechStackQuery } from '../../hooks/useGetShareTechStackQuery';

export const TechStackSection = () => {
  const { techStack } = useGetShareTechStackQuery();

  return (
    <GridSectionCard>
      <TechStackContent techStack={techStack} />
    </GridSectionCard>
  );
};
