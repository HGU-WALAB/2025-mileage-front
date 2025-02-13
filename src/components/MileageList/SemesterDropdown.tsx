import { Dropdown } from '@/components';
import { useFilteredBySemester } from '@/hooks';

const SemesterDropdown = () => {
  // TODO: 필터링 이후 학기 리스트 데이터 처리 고민 필요
  const { semesterList, selectedSemester, setSelectedSemester } =
    useFilteredBySemester();

  return (
    <Dropdown
      label="학기"
      items={semesterList || []}
      selectedItem={selectedSemester || '전체'}
      setSelectedItem={setSelectedSemester}
      width="200px"
    />
  );
};

export default SemesterDropdown;
