import { useTheme } from '@mui/material';
import { ResponsiveRadar } from '@nivo/radar';
// TODO: 유연한 타입으로 변경 필요
import { RadarCapability } from '@/pages/DashboardPage/types/capability';

const RadarChart = ({ data }: { data: RadarCapability[] }) => {
  const theme = useTheme();

  return (
    <ResponsiveRadar
      data={data}
      maxValue={100}
      keys={['나의 마일리지', '다른사람 평균']}
      indexBy="capabilityName"
      margin={{ top: 50, right: 50, bottom: 50, left: 50 }}
      borderColor={{ from: 'color', modifiers: [] }}
      gridLabelOffset={36}
      dotSize={5}
      dotBorderWidth={2}
      colors={[theme.palette.primary.main, theme.palette.secondary.main]}
      blendMode="multiply"
      motionConfig="wobbly"
      legends={[
        {
          anchor: 'bottom-left',
          direction: 'column',
          translateX: -40,
          translateY: -60,
          itemWidth: 80,
          itemHeight: 20,
          itemTextColor: '#999',
          symbolSize: 12,
          symbolShape: 'circle',
          effects: [
            {
              on: 'hover',
              style: {
                itemTextColor: '#000',
              },
            },
          ],
        },
      ]}
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
