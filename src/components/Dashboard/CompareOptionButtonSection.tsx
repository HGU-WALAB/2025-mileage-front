import { Flex, ToggleButton } from '@/components';

const compareOptionLabel = {
  term: '같은 학기',
  entryYear: '같은 학번',
  major1: '같은 1 전공',
  major2: '같은 2 전공',
} as const;

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
