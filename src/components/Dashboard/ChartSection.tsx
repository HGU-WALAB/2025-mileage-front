import { Flex } from '@/components';
import { LineChartSection, RadarChartSection } from '@/components/Dashboard';

const ChartSection = () => {
  return (
    <Flex.Row height="100%" width="100%" justify="center" gap="2rem">
      <RadarChartSection />
      <LineChartSection />
    </Flex.Row>
  );
};

export default ChartSection;
