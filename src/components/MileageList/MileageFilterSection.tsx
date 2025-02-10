import { Flex } from '@/components';
import {
  JoinedToggleButtonGroup,
  SemesterDropdown,
} from '@/components/MileageList';

const MileageFilterSection = () => {
  return (
    <Flex.Row height="40px" backgroundColor="red">
      <SemesterDropdown />
      <JoinedToggleButtonGroup />
    </Flex.Row>
  );
};

export default MileageFilterSection;
