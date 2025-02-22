import { Flex } from '@/components';
import {
  ApplySection,
  ConsentSection,
  MileageCountSection,
} from '@/components/ScholarshipApply';
import { useState } from 'react';

const ScholarshipApplyPage = () => {
  const [isAgree, setIsAgree] = useState(false);

  return (
    <Flex.Column gap="1rem">
      <MileageCountSection />
      <ConsentSection isAgree={isAgree} handleAgree={setIsAgree} />
      <ApplySection isAgree={isAgree} />
    </Flex.Column>
  );
};

export default ScholarshipApplyPage;
