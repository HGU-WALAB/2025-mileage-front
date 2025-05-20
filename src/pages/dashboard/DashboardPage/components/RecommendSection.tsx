import { Flex } from '@/components';
import { MAX_RESPONSIVE_WIDTH } from '@/constants/system';
import { useMediaQuery } from '@mui/material';

import { ActivityRecommendSection } from './ActivityRecommendSection';
import { CapabilityDetailSection } from './CapabilityDetailSection';

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

      <ActivityRecommendSection />
    </Flex.Row>
  );
};
