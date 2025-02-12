import { Input } from '@/components';
import { useFilteredByKeyword } from '@/hooks';

const SearchMileageInput = () => {
  const { keyword, setKeyword } = useFilteredByKeyword();

  return (
    <Input
      placeholder="검색"
      value={keyword}
      onChange={e => setKeyword(e.target.value)}
      style={{
        width: '300px',
      }}
    />
  );
};

export default SearchMileageInput;
