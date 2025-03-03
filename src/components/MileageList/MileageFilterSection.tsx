import { Flex } from '@/components';
import {
  JoinedTabs,
  SearchMileageInput,
  SemesterDropdown,
} from '@/components/MileageList';
import { ErrorBoundary } from 'react-error-boundary';

const MileageFilterSection = () => {
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

export default MileageFilterSection;
