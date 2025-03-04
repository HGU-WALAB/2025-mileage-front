import { Dropdown, Flex, Text } from '@/components';
import { useFilteredBySemester } from '@/hooks';
import { useAuthStore } from '@/stores';

const SemesterDropdown = () => {
  const { currentSemester } = useAuthStore();
  const { semesterList, isLoading, selectedSemester, setSelectedSemester } =
    useFilteredBySemester();

  return (
    <Flex.Row gap=".75rem" align="center">
      <Text>학기 선택</Text>
      {!isLoading && (
        <Dropdown
          items={semesterList ?? []}
          selectedItem={selectedSemester ?? currentSemester}
          setSelectedItem={setSelectedSemester}
          width="200px"
        />
      )}
    </Flex.Row>
  );
};

export default SemesterDropdown;
