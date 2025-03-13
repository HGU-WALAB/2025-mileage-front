import { Flex } from '@/components';
import {
  ChartSection,
  FAQSection,
  MileageCountSection,
  ProcessSection,
} from '@/components/Dashboard';
import { useTrackPageView } from '@/service/amplitude/useTrackPageView';

const DashboardPage = () => {
  useTrackPageView({ eventName: '[View] 대시보드 페이지' });

  return (
    <Flex.Column margin="1rem 1rem 2rem" gap="1rem">
      <MileageCountSection />

      <ChartSection />

      <ProcessSection />

      <FAQSection />
    </Flex.Column>
  );
};

export default DashboardPage;
