import { useTheme, styled } from '@mui/material';
import { ResponsiveRadar } from '@nivo/radar';

import { RadarCapability } from '@dashboard/types/capability';

// TODO: 유연한 타입으로 변경 필요
const RadarChart = ({ data }: { data: RadarCapability[] }) => {
  const theme = useTheme();

  return (
<<<<<<< HEAD
    <S.RadarChartWrapper>
      <ResponsiveRadar
        data={data}
        maxValue={100}
        keys={['나의 마일리지', '비교 대상 평균 마일리지']}
        indexBy="capabilityName"
        margin={{ top: 60, right: 50, bottom: 50, left: 50 }}
        borderColor={{ from: 'color', modifiers: [] }}
        gridLabelOffset={20}
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
=======
    <ResponsiveRadar
      data={data}
      maxValue={100}
      keys={['나의 마일리지', '비교 대상 평균 마일리지']}
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
>>>>>>> 118cd6a (fix: compareOption 1/2 전공 -> 전공 구분으로 통합 및 API 변경 사항 반영, 일부 워딩 수정)
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
    </S.RadarChartWrapper>
  );
};

export default RadarChart;

const S = {
  RadarChartWrapper: styled('div')`
    width: 100%;
    height: 120%;
  `
}