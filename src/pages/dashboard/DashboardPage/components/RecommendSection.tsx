import { Flex } from '@/components';
import { MAX_RESPONSIVE_WIDTH } from '@/constants/system';
import { useMediaQuery } from '@mui/material';

import { CapabilityDetailSection } from './CapabilityDetailSection';
import { MileageHistoryChartSection } from './MileageHistoryChartSection';

export const RecommendSection = () => {
  const isMobile = useMediaQuery(MAX_RESPONSIVE_WIDTH);

  return (
    <Flex.Row
      height="fit-content"
      width="100%"
      justify="center"
      gap="1rem"
      wrap={isMobile ? 'wrap' : 'nowrap'}
    >
      <CapabilityDetailSection />

      <MileageHistoryChartSection />
    </Flex.Row>
  );
};
