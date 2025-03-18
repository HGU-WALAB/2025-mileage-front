import { RadarCapability } from '@/types/capability';
import { useTheme } from '@mui/material';
import { ResponsiveRadar } from '@nivo/radar';

const RadarChart = ({ data }: { data: RadarCapability[] }) => {
  const theme = useTheme();

  return (
    <ResponsiveRadar
      data={data}
      keys={['mileagePercent']}
      indexBy="capabilityName"
      margin={{ top: 50, right: 50, bottom: 50, left: 50 }}
      borderColor={{ from: 'color', modifiers: [] }}
      gridLabelOffset={36}
      dotSize={5}
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
            borderRadius: '4px',
          }}
        >
          <strong>역량: </strong>
          {Number(point.data[0].formattedValue).toFixed(1)}%
        </div>
      )}
    />
  );
};

export default RadarChart;
