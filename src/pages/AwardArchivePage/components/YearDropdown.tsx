import { Dropdown, Flex, Text } from '@/components';

import { useFilteredByAwardYear } from '../hooks/useFilteredByAwardYear';

export const YearDropdown = () => {
  const { yearList, selectedYear, setSelectedNewYear } =
    useFilteredByAwardYear();

  return (
    <Flex.Row gap=".75rem" align="center">
      <Text>연도 선택</Text>
      <Dropdown
        items={yearList ?? []}
        selectedItem={selectedYear}
        setSelectedItem={setSelectedNewYear}
        width="200px"
      />
    </Flex.Row>
  );
};
