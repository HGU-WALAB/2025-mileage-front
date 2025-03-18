import { Flex } from '@/components';
import {
  EtcMileageSection,
  SubmittedMileageSection,
} from '@/components/AddMileage';
import { pageHeight } from '@/constants/layoutSize';
import { useTrackPageView } from '@/service/amplitude/useTrackPageView';

const AddMileagePage = () => {
  useTrackPageView({ eventName: '[View] 마일리지 등록 페이지' });

  return (
    <Flex.Column margin="1rem" height={pageHeight}>
      <EtcMileageSection />

      <SubmittedMileageSection />
    </Flex.Column>
  );
};

export default AddMileagePage;
