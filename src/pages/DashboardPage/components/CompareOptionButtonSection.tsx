import { Flex, ToggleButton } from '@/components';

import { compareOptionLabel } from '../constants/compareOptionLabel';

export const CompareOptionButtonSection = ({
  compareOption,
  setCompareOption,
}: {
  compareOption: string[];
  setCompareOption: React.Dispatch<React.SetStateAction<string[]>>;
}) => {
  const handleToggleCompareOption = (value: string) => {
    setCompareOption(prev =>
      prev.includes(value) ? prev.filter(v => v !== value) : [...prev, value],
    );
  };

  return (
    <Flex justify="flex-end" gap=".5rem">
      {Object.entries(compareOptionLabel).map(([key, value]) => (
        <ToggleButton
          key={key}
          selected={compareOption.includes(key)}
          label={value}
          variant="outlined"
          value={key}
          onClick={() => handleToggleCompareOption(key)}
        />
      ))}
    </Flex>
  );
};
