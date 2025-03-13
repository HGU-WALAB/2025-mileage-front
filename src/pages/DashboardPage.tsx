import { Flex } from '@/components';
import {
  ChartSection,
  FAQSection,
  MileageCountSection,
  ProcessSection,
  ScholarshipDurationSection,
} from '@/components/Dashboard';

const DashboardPage = () => {
  return (
    <Flex.Column margin="1rem 1rem 2rem" gap="1rem">
      <Flex.Row justify="space-between" align="flex-end">
        <ScholarshipDurationSection />
        <MileageCountSection />
      </Flex.Row>

      <ChartSection />

      <ProcessSection />

      <FAQSection />
    </Flex.Column>
  );
};

export default DashboardPage;
