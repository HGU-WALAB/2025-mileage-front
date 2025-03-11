import { ExpandMoreIcon } from '@/assets';
import Flex from '@/components/_common/Flex/Flex';
import { boxShadow } from '@/styles/common';
import { getOpacityColor } from '@/utils/getOpacityColor';
import { Accordion as MuiAccordion, styled, useTheme } from '@mui/material';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import { useState } from 'react';

interface Props {
  title: string;
  desc: React.ReactNode;
}

const Accordion = ({ title, desc }: Props) => {
  const theme = useTheme();
  const [expanded, setExpanded] = useState(false);
  return (
    <S.MuiAccordion
      expanded={expanded}
      onClick={() => setExpanded(prev => !prev)}
    >
      <S.AccordionSummary
        expandIcon={
          <S.ExpandedIconWrapper
            justify="center"
            align="center"
            expanded={expanded}
          >
            <ExpandMoreIcon
              sx={{
                color: expanded
                  ? theme.palette.white
                  : theme.palette.primary.main,
              }}
            />
          </S.ExpandedIconWrapper>
        }
        expanded={expanded}
      >
        <S.Title expanded={expanded}>{title}</S.Title>
      </S.AccordionSummary>
      <S.AccordionDetails>{desc}</S.AccordionDetails>
    </S.MuiAccordion>
  );
};

export default Accordion;

const S = {
  MuiAccordion: styled(MuiAccordion)<{ expanded: boolean }>`
    border: none;
    border-radius: 1rem !important;
    margin: 0 !important;

    &::before {
      display: none;
    }

    ${({ expanded }) => (expanded ? boxShadow : 'box-shadow: none;')}
    ${({ expanded, theme }) =>
      expanded
        ? `border: 2px solid ${getOpacityColor(theme.palette.primary.main, 0.5)}`
        : ''}
  `,
  AccordionSummary: styled(AccordionSummary)<{ expanded: boolean }>`
    border-radius: 1rem;
    height: 50px;

    ${({ expanded }) => (expanded ? '' : boxShadow)}
  `,
  AccordionDetails: styled(AccordionDetails)`
    border: none;
    border-radius: 1rem;
  `,
  Title: styled('div')<{ expanded: boolean }>`
    ${({ theme }) => theme.typography.h3}
    color: ${({ expanded, theme }) =>
      expanded ? theme.palette.primary.main : theme.palette.black};
  `,
  ExpandedIconWrapper: styled(Flex.Column)<{ expanded: boolean }>`
    background-color: ${({ expanded, theme }) =>
      expanded ? theme.palette.primary.main : theme.palette.white};
    border-radius: 100%;
    height: 30px;
    width: 30px;

    ${({ expanded }) => (expanded ? '' : boxShadow)}
  `,
};
