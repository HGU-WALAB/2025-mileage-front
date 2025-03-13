import { Flex } from '@/components';
import {
  AppliedSection,
  ApplySection,
  ConsentSection,
  MileageBannerSection,
} from '@/components/ScholarshipApply';
import { useGetIsAppliedScholarshipQuery } from '@/hooks/queries';
import { useTrackPageView } from '@/service/amplitude/useTrackPageView';
import { useState } from 'react';

const ScholarshipApplyPage = () => {
  useTrackPageView({ eventName: '[View] 장학금 신청 페이지' });

  const [isAgree, setIsAgree] = useState(false);
  const { data: isApplied } = useGetIsAppliedScholarshipQuery();

  return (
    <Flex.Column gap="1rem">
      <MileageBannerSection />
      <ConsentSection
        isAgree={isAgree}
        handleAgree={setIsAgree}
        isApplied={isApplied?.isApply ?? 0}
      />
      {isApplied?.isApply ? (
        <AppliedSection />
      ) : (
        <ApplySection isAgree={isAgree} />
      )}
    </Flex.Column>
  );
};

export default ScholarshipApplyPage;
