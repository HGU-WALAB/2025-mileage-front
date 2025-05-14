import { Flex } from '@/components';
import { pageHeight } from '@/constants/layoutSize';
import { useTrackPageView } from '@/service/amplitude/useTrackPageView';

import { EtcMileageSection } from './components/EtcMileageSection';
import { SubmittedMileageSection } from './components/SubmittedMileageSection';

const MileageAddPage = () => {
  useTrackPageView({ eventName: '[View] 마일리지 등록 페이지' });

  return (
    <Flex.Column margin="1rem" height={pageHeight}>
      <EtcMileageSection />

      <SubmittedMileageSection />
    </Flex.Column>
  );
};

export default MileageAddPage;
