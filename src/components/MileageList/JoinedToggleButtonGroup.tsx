import { ToggleButton } from '@/components';
import { useFilteredJoinMileage } from '@/hooks';

const JoinedToggleButtonGroup = () => {
  const { selectedIsJoined, setSelectedIsJoin } = useFilteredJoinMileage();

  return (
    <>
      <ToggleButton
        label="참여항목"
        value="Y"
        selected={selectedIsJoined === 'Y'}
        onClick={() => setSelectedIsJoin('Y')}
        isRound
      />
      <ToggleButton
        label="미참여항목"
        value="N"
        selected={selectedIsJoined === 'N'}
        onClick={() => setSelectedIsJoin('N')}
        isRound
      />
    </>
  );
};

export default JoinedToggleButtonGroup;
