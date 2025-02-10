import { Flex } from '@/components';
import {
  JoinedToggleButtonGroup,
  SearchMileageInput,
  SemesterDropdown,
} from '@/components/MileageList';

const MileageFilterSection = () => {
  return (
    <Flex.Row height="40px" backgroundColor="red">
      <SemesterDropdown />
      <JoinedToggleButtonGroup />
      <SearchMileageInput />
    </Flex.Row>
  );
};

export default MileageFilterSection;
