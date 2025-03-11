import { Flex } from '@/components';
import {
  ChartSection,
  FAQSection,
  MileageCountSection,
  ProcessSection,
} from '@/components/Dashboard';
import { pageHeight } from '@/constants/layoutSize';

const DashboardPage = () => {
  return (
    <Flex.Column margin="1rem" height={pageHeight} gap="1rem">
      <MileageCountSection />

      <ChartSection />

      <ProcessSection />

      <FAQSection />
    </Flex.Column>
  );
};

export default DashboardPage;
