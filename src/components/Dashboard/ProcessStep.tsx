import { Flex, Heading } from '@/components';
import { processStep } from '@/constants/processStep';
import { MAX_RESPONSIVE_WIDTH } from '@/constants/system';
import { getOpacityColor } from '@/utils/getOpacityColor';
import { styled, useMediaQuery } from '@mui/material';

const ProcessStep = () => {
  const isMobile = useMediaQuery(MAX_RESPONSIVE_WIDTH);
  return (
    <>
      {processStep.map((step, index) => (
        <>
          <S.StepBox
            key={`step-${step}`}
            justify="center"
            align="center"
            isMobile={isMobile}
          >
            <Heading
              as="h3"
              style={{
                textAlign: 'center',
              }}
            >
              {step}
            </Heading>
          </S.StepBox>
          {index + 1 !== processStep.length &&
            (isMobile ? (
              <S.DownArrowBox key={`down-arrow-${step}`} />
            ) : (
              <S.RightArrowBox key={`right-arrow-${step}`} />
            ))}
        </>
      ))}
    </>
  );
};

export default ProcessStep;

const S = {
  StepBox: styled(Flex.Row)<{ isMobile: boolean }>`
    background-color: ${({ theme }) => theme.palette.primary.light};
    border: 2px solid
      ${({ theme }) => getOpacityColor(theme.palette.primary.main, 0.5)};
    border-radius: 1rem;
    color: ${({ theme }) => theme.palette.primary.main};
    height: fit-content;
    padding: ${({ isMobile }) => (isMobile ? '1rem' : '1rem')};
    width: ${({ isMobile }) => (isMobile ? '100%' : 'fit-content')};
  `,
  DownArrowBox: styled('div')`
    border-left: 15px solid transparent;
    border-right: 15px solid transparent;
    border-top: 20px solid
      ${({ theme }) => getOpacityColor(theme.palette.primary.main, 0.7)};
    height: 0;
    width: 0;
  `,
  RightArrowBox: styled('div')`
    border-bottom: 15px solid transparent;
    border-left: 20px solid
      ${({ theme }) => getOpacityColor(theme.palette.primary.main, 0.7)};
    border-top: 15px solid transparent;
    height: 0;
    width: 0;
  `,
};
