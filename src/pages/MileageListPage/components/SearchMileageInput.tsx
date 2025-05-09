import { SearchIcon } from '@/assets';
import { Flex, Input } from '@/components';
import { styled, useTheme } from '@mui/material';
import { useState } from 'react';

import { useFilteredByKeyword } from '../hooks/useFilteredByKeyword';

export const SearchMileageInput = () => {
  const theme = useTheme();
  const { keyword, setKeyword } = useFilteredByKeyword();
  const [localKeyword, setLocalKeyword] = useState(keyword);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newKeyword = e.target.value;
    setLocalKeyword(newKeyword);
    setKeyword(newKeyword);
  };

  return (
    <Flex.Row gap=".5rem">
      <Input
        placeholder="항목명을 입력하세요"
        value={localKeyword}
        onChange={handleInputChange}
        style={{
          width: '300px',
          backgroundColor: theme.palette.variant.default,
        }}
      />
      <S.SearchButton onClick={() => setKeyword(localKeyword ?? '')}>
        <SearchIcon />
      </S.SearchButton>
    </Flex.Row>
  );
};

const S = {
  SearchButton: styled('button')`
    background-color: ${({ theme }) => theme.palette.primary.main};
    border-radius: 0.4rem;
    padding: 0.5rem 1rem;

    &:hover,
    &:active {
      background-color: ${({ theme }) => theme.palette.blue600};
    }
  `,
};
