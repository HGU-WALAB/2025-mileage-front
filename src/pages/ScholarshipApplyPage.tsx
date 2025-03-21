import { Flex } from '@/components';
import {
  ApplySection,
  ConsentSection,
  MileageBannerSection,
  NotScholarshipDurationSection,
} from '@/components/ScholarshipApply';
import { useScholarshipDuration } from '@/hooks';
import { useGetIsAppliedScholarshipQuery } from '@/hooks/queries';
import { useTrackPageView } from '@/service/amplitude/useTrackPageView';
import { useState } from 'react';

const ScholarshipApplyPage = () => {
  useTrackPageView({ eventName: '[View] 장학금 신청 페이지' });

  const [isAgree, setIsAgree] = useState(false);
  const { data: isApplied } = useGetIsAppliedScholarshipQuery();

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
