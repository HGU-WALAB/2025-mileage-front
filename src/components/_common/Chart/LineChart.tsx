import { SemesterCapabilityResponse } from '@/types/capability';
import { useTheme } from '@mui/material';
import { ResponsiveLine } from '@nivo/line';

const LineChart = ({ data }: { data: SemesterCapabilityResponse[] }) => {
  const theme = useTheme();
  const formattedData = [
    {
      id: 'Capability Points',
      data: data.map(capability => ({
        x: capability.semester,
        y: capability.userMilestoneCount,
      })),
    },
  ];

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
      curve="natural"
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
      areaBaselineValue={200}
      enableTouchCrosshair={true}
      useMesh={true}
    />
  );
};

export default LineChart;
