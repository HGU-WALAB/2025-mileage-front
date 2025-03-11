import { Flex } from '@/components';
import {
  ChartSection,
  FAQSection,
  MileageCountSection,
  ProcessSection,
} from '@/components/Dashboard';

const DashboardPage = () => {
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
