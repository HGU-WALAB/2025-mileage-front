import { IntroduceContent } from '@/pages/profile/components/IntroduceContent';
import { SectionBox } from '@/pages/profile/components/SectionBox';
import { useGetShareProfileQuery } from '@/pages/profile/hooks/useGetShareProfileQuery';

export const IntroduceSection = () => {
  const { profile } = useGetShareProfileQuery();

  return (
    <SectionBox>
      <IntroduceContent introduce={profile.self_description} />
    </SectionBox>
  );
};
