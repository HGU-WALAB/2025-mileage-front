import { Flex } from '@/components';
import { ChartSection } from '@/components/Dashboard';
import { pageHeight } from '@/constants/layoutSize';

const DashboardPage = () => {
  return (
    <Flex.Column margin="1rem" height={pageHeight}>
      <ChartSection />
    </Flex.Column>
  );
};

export default DashboardPage;
