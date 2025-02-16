import { Dropdown, Flex, Text } from '@/components';
import { useFilteredBySemester } from '@/hooks';

const SemesterDropdown = () => {
  // TODO: 필터링 이후 학기 리스트 데이터 처리 고민 필요
  const { semesterList, selectedSemester, setSelectedSemester } =
    useFilteredBySemester();

  return (
    <Flex.Row gap=".5rem" align="center">
      <Text>학기 선택</Text>
      <Dropdown
        items={semesterList || []}
        selectedItem={selectedSemester || '전체'}
        setSelectedItem={setSelectedSemester}
        width="200px"
      />
    </Flex.Row>
  );
};

export default SemesterDropdown;
