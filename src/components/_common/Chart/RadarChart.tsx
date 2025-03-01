import { Capability } from '@/types/capability';
import { useTheme } from '@mui/material';
import { ResponsiveRadar } from '@nivo/radar';

const RadarChart = ({ data }: { data: Capability[] }) => {
  const theme = useTheme();

  return (
    <ResponsiveRadar
      data={data}
      keys={['capabilityPoint']}
      indexBy="capabilityName"
      valueFormat=">-.2f"
      margin={{ top: 50, right: 50, bottom: 50, left: 50 }}
      borderColor={{ from: 'color', modifiers: [] }}
      gridLabelOffset={36}
      dotSize={10}
      dotColor={{ theme: 'background' }}
      dotBorderWidth={2}
      colors={[theme.palette.primary.main]}
      blendMode="multiply"
      motionConfig="wobbly"
      sliceTooltip={point => (
        <div
          style={{
            background: 'white',
            padding: '5px 10px',
            border: '1px solid #ccc',
          }}
        >
          <strong>역량: </strong>
          {point.data[0].formattedValue}
        </div>
      )}
    />
  );
};

export default RadarChart;
