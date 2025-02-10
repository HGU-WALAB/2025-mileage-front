import { Dropdown } from '@/components';
import { useFilteredBySemester } from '@/hooks';

const SemesterDropdown = () => {
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
