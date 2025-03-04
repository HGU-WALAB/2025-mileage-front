import { Flex } from '@/components';
import {
  JoinedTabs,
  SearchMileageInput,
  SemesterDropdown,
} from '@/components/MileageList';
import { ErrorBoundary } from 'react-error-boundary';

const MileageFilterSection = () => {
  return (
    <Flex direction="row-reverse" justify="space-between" margin="1rem 0">
      <Flex.Row height="30px" align="center" gap="1rem">
        <SearchMileageInput />
        <ErrorBoundary fallback={<div />}>
          <SemesterDropdown />
        </ErrorBoundary>
      </Flex.Row>
      <JoinedTabs />
    </Flex>
  );
};

export default MileageFilterSection;
