import { Flex } from '@/components';
import {
  JoinedToggleButtonGroup,
  SearchMileageInput,
  SemesterDropdown,
} from '@/components/MileageList';

const MileageFilterSection = () => {
  return (
    <Flex.Row height="40px" margin="1rem 0" justify="space-between">
      <Flex.Row gap="0 1rem">
        <SemesterDropdown />
        <JoinedToggleButtonGroup />
      </Flex.Row>
      <SearchMileageInput />
    </Flex.Row>
  );
};

export default MileageFilterSection;
