import { Dropdown, Flex, Text } from '@/components';
import { useAuthStore } from '@/stores';

import { useFilteredBySemester } from '../hooks/useFilteredBySemester';

export const SemesterDropdown = () => {
  const { currentSemester } = useAuthStore();
  const { semesterList, isLoading, selectedSemester, setSelectedSemester } =
    useFilteredBySemester();

  return (
    <Flex.Row gap=".75rem" align="center">
      {!isLoading && (
        <>
          <Text>학기 선택</Text>
          <Dropdown
            items={semesterList ?? []}
            selectedItem={selectedSemester ?? currentSemester}
            setSelectedItem={setSelectedSemester}
            width="200px"
          />
        </>
      )}
    </Flex.Row>
  );
};
