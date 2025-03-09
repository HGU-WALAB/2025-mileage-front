import { Flex } from '@/components';
import {
  ApplySection,
  ConsentSection,
  MileageBannerSection,
} from '@/components/ScholarshipApply';
import { useState } from 'react';

const ScholarshipApplyPage = () => {
  const [isAgree, setIsAgree] = useState(false);

  return (
    <Flex.Column gap="1rem">
      <MileageBannerSection />
      <ConsentSection isAgree={isAgree} handleAgree={setIsAgree} />
      <ApplySection isAgree={isAgree} />
      {isApplied?.isApply ? (
        <AppliedSection />
      ) : (
        <ApplySection isAgree={isAgree} />
      )}
    </Flex.Column>
  );
};

export default ScholarshipApplyPage;
