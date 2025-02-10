import { Flex, ToggleButton } from '@/components';
import { useFilteredByJoined } from '@/hooks';

const JoinedToggleButtonGroup = () => {
  const { selectedJoined, setSelectedJoined } = useFilteredByJoined();

  return (
    <Flex.Row gap="0 .5rem">
      <ToggleButton
        label="참여항목"
        value="Y"
        selected={selectedJoined === 'Y'}
        onClick={() => setSelectedJoined('Y')}
        isRound
      />
      <ToggleButton
        label="미참여항목"
        value="N"
        selected={selectedJoined === 'N'}
        onClick={() => setSelectedJoined('N')}
        isRound
      />
    </Flex.Row>
  );
};

export default JoinedToggleButtonGroup;
