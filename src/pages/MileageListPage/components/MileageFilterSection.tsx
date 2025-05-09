import { Flex } from '@/components';
import { ErrorBoundary } from 'react-error-boundary';

import { JoinedTabs } from './JoinedTabs';
import { SearchMileageInput } from './SearchMileageInput';
import { SemesterDropdown } from './SemesterDropdown';

export const MileageFilterSection = () => {
  return (
    <Flex.Column>
      <Flex.Row margin="1rem 0" align="center" gap="1rem" wrap="wrap">
        <SearchMileageInput />

        <ErrorBoundary fallback={<div />}>
          <SemesterDropdown />
        </ErrorBoundary>
      </Flex.Row>

      <JoinedTabs />
    </Flex.Column>
  );
};
