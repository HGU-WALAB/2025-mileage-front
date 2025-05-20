import { Flex } from '@/components';
import { useTrackPageView } from '@/service/amplitude/useTrackPageView';
import { useState } from 'react';

import { useGetIsAppliedScholarshipQuery } from '../hooks/useGetIsAppliedScholarshipQuery';
import { useScholarshipDuration } from '../hooks/useScholarshipDuration';
import { ApplySection } from './components/ApplySection';
import { ConsentSection } from './components/ConsentSection';
import { FAQSection } from './components/FAQSection';
import { MileageBannerSection } from './components/MileageBannerSection';
import { NotScholarshipDurationSection } from './components/NotScholarshipDurationSection';
import { ProcessSection } from './components/ProcessSection';

const ScholarshipApplyPage = () => {
  useTrackPageView({ eventName: '[View] 장학금 신청 페이지' });

  const [isAgree, setIsAgree] = useState(false);
  const { isApplied } = useGetIsAppliedScholarshipQuery();

  const { isScholarshipDuration } = useScholarshipDuration();
  if (!isScholarshipDuration) return <NotScholarshipDurationSection />;

  return (
    <Flex.Column gap="1rem">
      <MileageBannerSection />

      <Flex.Column margin="0 1rem" gap="1rem">
        <ProcessSection />

        <ConsentSection
          isAgree={isAgree}
          handleAgree={setIsAgree}
          isApplied={isApplied?.isApply ?? 0}
        />

        <ApplySection isAgree={isAgree} />

        <FAQSection />
      </Flex.Column>
    </Flex.Column>
  );
};

export default ScholarshipApplyPage;
