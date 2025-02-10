import { ToggleButton } from '@/components';
import { useFilteredJoined } from '@/hooks';

const JoinedToggleButtonGroup = () => {
  const { selectedJoined, setSelectedJoined } = useFilteredJoined();

  return (
    <>
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
    </>
  );
};

export default JoinedToggleButtonGroup;
