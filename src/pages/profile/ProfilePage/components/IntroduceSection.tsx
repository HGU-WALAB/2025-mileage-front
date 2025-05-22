import { IntroduceContent } from '../../components/IntroduceContent';
import { SectionBox } from '../../components/SectionBox';
import { useGetProfileQuery } from '../../hooks/useGetProfileQuery';

export const IntroduceSection = () => {
  const { profile } = useGetProfileQuery();

  return (
    <SectionBox height="150px" minHeight="150px">
      <IntroduceContent introduce={profile.self_description} />
    </SectionBox>
  );
};
