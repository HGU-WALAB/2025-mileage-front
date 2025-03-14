import { Flex } from '@/components';
import {
  ChartSection,
  FAQSection,
  MileageCountSection,
  ProcessSection,
  ScholarshipDurationSection,
} from '@/components/Dashboard';
import { MAX_RESPONSIVE_WIDTH } from '@/constants/system';
import { useTrackPageView } from '@/service/amplitude/useTrackPageView';
import { useMediaQuery } from '@mui/material';

const DashboardPage = () => {
  useTrackPageView({ eventName: '[View] 대시보드 페이지' });

  const isMobile = useMediaQuery(MAX_RESPONSIVE_WIDTH);

  return (
    <Flex.Column margin="1rem 1rem 2rem" gap="1rem">
      <Flex.Row justify="space-between" align="flex-end">
        {!isMobile && <ScholarshipDurationSection />}
        <MileageCountSection />
      </Flex.Row>

      <ChartSection />

      <ProcessSection />

      <FAQSection />
    </Flex.Column>
  );
};

export default DashboardPage;
