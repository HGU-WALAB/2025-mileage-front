import { Dropdown } from '@/components';
import { useFilteredSemester } from '@/hooks';

const SemesterDropdown = () => {
  const { semesterList, selectedSemester, setSelectedSemester } =
    useFilteredSemester();

  return (
    <Dropdown
      label="학기"
      items={semesterList || []}
      selectedItem={selectedSemester || '전체'}
      setSelectedItem={setSelectedSemester}
    />
  );
};

export default SemesterDropdown;
