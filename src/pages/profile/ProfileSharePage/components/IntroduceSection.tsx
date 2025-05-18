import { IntroduceContent } from '../../components/IntroduceContent';
import { SectionBox } from '../../components/SectionBox';
import { useGetShareProfileQuery } from '../../hooks/useGetShareProfileQuery';

export const IntroduceSection = () => {
  const { profile } = useGetShareProfileQuery();

  return (
    <SectionBox>
      <IntroduceContent introduce={profile.self_description} />
    </SectionBox>
  );
};
