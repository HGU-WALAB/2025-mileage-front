import { Input } from '@/components';
import { useFilteredBySearchKeyword } from '@/hooks';

const SearchMileageInput = () => {
  const { searchKeyword, setSearchKeyword } = useFilteredBySearchKeyword();

  return (
    <Input
      label="검색"
      value={searchKeyword}
      onChange={e => setSearchKeyword(e.target.value)}
    />
  );
};

export default SearchMileageInput;
