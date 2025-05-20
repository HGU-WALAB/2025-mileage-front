import { Flex } from '@/components';

import { ChartSection } from './ChartSection';
import { RecommendSection } from './RecommendSection';

export const CapabilitySection = () => {
  return (
    <Flex.Column gap="1rem">
      <ChartSection />

      <RecommendSection />
    </Flex.Column>
  );
};
