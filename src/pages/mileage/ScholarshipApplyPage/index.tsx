import { Flex } from '@/components';
import { useTrackPageView } from '@/service/amplitude/useTrackPageView';
import { useState } from 'react';

import { useGetIsAppliedScholarshipQuery } from '../hooks/useGetIsAppliedScholarshipQuery';
import { useScholarshipDuration } from '../hooks/useScholarshipDuration';
import { ApplySection } from './components/ApplySection';
import { ConsentSection } from './components/ConsentSection';
import { MileageBannerSection } from './components/MileageBannerSection';
import { NotScholarshipDurationSection } from './components/NotScholarshipDurationSection';

const ScholarshipApplyPage = () => {
  useTrackPageView({ eventName: '[View] 장학금 신청 페이지' });

  const [isAgree, setIsAgree] = useState(false);
  const { isApplied } = useGetIsAppliedScholarshipQuery();

  const { isScholarshipDuration } = useScholarshipDuration();
  if (!isScholarshipDuration) return <NotScholarshipDurationSection />;

  return (
    <Flex.Column gap="1rem">
      <MileageBannerSection />

      <ConsentSection
        isAgree={isAgree}
        handleAgree={setIsAgree}
        isApplied={isApplied?.isApply ?? 0}
      />

      <ApplySection isAgree={isAgree} />
    </Flex.Column>
  );
};

export default ScholarshipApplyPage;
