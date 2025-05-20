import { GridSectionCard } from '../../components/GridSectionCard';
import { TechStackContent } from '../../components/TechStackContent';
import { useGetTechStackQuery } from '../../hooks/useGetTechStackQuery';

export const TechStackSection = () => {
  const { techStack } = useGetTechStackQuery();

  return (
    <GridSectionCard>
      <TechStackContent techStack={techStack} />
    </GridSectionCard>
  );
};
