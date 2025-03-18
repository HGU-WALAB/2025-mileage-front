import { SemesterCapabilityResponse } from '@/types/capability';
import { useTheme } from '@mui/material';
import { ResponsiveLine } from '@nivo/line';
import { useMemo } from 'react';

const LineChart = ({ data }: { data: SemesterCapabilityResponse[] }) => {
  const theme = useTheme();
  const formattedData = useMemo(
    () => [
      {
        id: 'Capability Points',
        data: data.map(capability => ({
          x: capability.semester,
          y: capability.userMilestoneCount,
        })),
      },
    ],
    [data],
  );

  const minBaseLine = Math.min(
    ...data.filter(a => a.userMilestoneCount).map(a => a.userMilestoneCount),
  );

  return (
    <ResponsiveLine
      data={formattedData}
      margin={{ top: 50, right: 50, bottom: 50, left: 50 }}
      xScale={{ type: 'point' }}
      yScale={{
        type: 'linear',
        min: 'auto',
        max: 'auto',
        stacked: true,
        reverse: false,
      }}
      yFormat=" >-.2f"
      curve="linear"
      axisTop={null}
      axisRight={null}
      axisBottom={{
        tickSize: 5,
        tickPadding: 5,
        tickRotation: 0,
        truncateTickAt: 0,
      }}
      axisLeft={{
        tickSize: 5,
        tickPadding: 5,
        tickRotation: 0,
        truncateTickAt: 0,
      }}
      colors={[theme.palette.primary.main]}
      pointSize={5}
      pointBorderWidth={2}
      pointLabel="data.yFormatted"
      pointLabelYOffset={-12}
      enableArea={true}
      areaBaselineValue={minBaseLine}
      enableTouchCrosshair={true}
      useMesh={true}
      tooltip={point => {
        return (
          <div
            style={{
              background: 'white',
              padding: '5px 10px',
              border: '1px solid #ccc',
              borderRadius: '4px',
            }}
          >
            <strong>마일리지 건수: </strong>
            {point.point.data.y.toString()}건
          </div>
        );
      }}
    />
  );
};

export default LineChart;
