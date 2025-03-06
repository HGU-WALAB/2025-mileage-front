import { Flex } from '@/components';
import { ChartSection, MileageCountSection } from '@/components/Dashboard';
import { pageHeight } from '@/constants/layoutSize';

const DashboardPage = () => {
  return (
    <Flex.Column margin="1rem" height={pageHeight} gap="1rem">
      <MileageCountSection />
      <ChartSection />
    </Flex.Column>
  );
};

export default DashboardPage;
