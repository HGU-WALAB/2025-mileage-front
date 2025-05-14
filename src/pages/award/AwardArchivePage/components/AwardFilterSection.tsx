import { Flex } from '@/components';
import { ErrorBoundary } from 'react-error-boundary';

import { Suspense } from 'react';
import { AwardTypeTabs } from './AwardTypeTabs';
import { SearchAwardInput } from './SearchAwardInput';
import { YearDropdown } from './YearDropdown';

export const AwardFilterSection = () => {
  return (
    <Flex.Column>
      <Flex.Row margin="1rem 0" align="center" gap="1rem" wrap="wrap">
        <SearchAwardInput />

        <ErrorBoundary fallback={<div />}>
          <Suspense>
            <YearDropdown />
          </Suspense>
        </ErrorBoundary>
      </Flex.Row>

      <AwardTypeTabs />
    </Flex.Column>
  );
};
