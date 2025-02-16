import { SearchIcon } from '@/assets';
import { Flex, Input } from '@/components';
import { useFilteredByKeyword } from '@/hooks';
import { styled, useTheme } from '@mui/material';

const SearchMileageInput = () => {
  const theme = useTheme();
  const { keyword, setKeyword } = useFilteredByKeyword();

  return (
    <Flex.Row gap=".5rem">
      <Input
        placeholder="항목명을 입력하세요"
        value={keyword}
        onChange={e => setKeyword(e.target.value)}
        style={{
          width: '300px',
          backgroundColor: theme.palette.white,
        }}
      />
      <S.SearchButton onClick={() => setKeyword(keyword ?? '')}>
        <SearchIcon />
      </S.SearchButton>
    </Flex.Row>
  );
};

export default SearchMileageInput;

const S = {
  SearchButton: styled('button')`
    background-color: ${({ theme }) => theme.palette.primary.main};
    border-radius: 0.4rem;
    padding: 0.5rem 1rem;

    &:hover,
    &:active {
      background-color: ${({ theme }) => theme.palette.primary.dark};
    }
  `,
};
