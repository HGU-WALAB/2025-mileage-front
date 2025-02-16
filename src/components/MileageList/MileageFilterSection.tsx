import { Flex } from '@/components';
import { SearchMileageInput, SemesterDropdown } from '@/components/MileageList';
import JoinedTabs from '@/components/MileageList/JoinedTabs';

const MileageFilterSection = () => {
  return (
    <Flex.Column>
      <Flex.Row height="40px" margin="1rem 0" align="center" gap="1rem">
        <SearchMileageInput />
        <SemesterDropdown />
      </Flex.Row>
      <JoinedTabs />
    </Flex.Column>
  );
};

export default MileageFilterSection;
