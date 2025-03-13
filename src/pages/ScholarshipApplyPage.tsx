import { Flex } from '@/components';
import {
  AppliedSection,
  ApplySection,
  ConsentSection,
  MileageBannerSection,
  NotScholarshipDurationSection,
} from '@/components/ScholarshipApply';
import { useGetIsAppliedScholarshipQuery } from '@/hooks/queries';
import useScholarshipDuration from '@/hooks/useScholarshipDuration';
import { useState } from 'react';

const ScholarshipApplyPage = () => {
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
      {isApplied?.isApply ? (
        <AppliedSection />
      ) : (
        <ApplySection isAgree={isAgree} />
      )}
    </Flex.Column>
  );
};

export default ScholarshipApplyPage;
