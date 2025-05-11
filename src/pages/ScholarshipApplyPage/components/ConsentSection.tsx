import { CheckCircleIcon, CheckCircleOutlineIcon } from '@/assets';
import { Flex, Heading, Text } from '@/components';
import { styled } from '@mui/material';

import { personalInfoConsent } from '../constants/personalInfoConsent';

interface Props {
  isAgree: boolean;
  handleAgree: (isAgree: boolean) => void;
  isApplied: number;
}

export const ConsentSection = ({ isAgree, handleAgree, isApplied }: Props) => {
  return (
    <S.Section wrap="wrap">
      <Flex.Column>
        <Heading as="h2">{personalInfoConsent.title}</Heading>
        <S.ConsentText
          dangerouslySetInnerHTML={{ __html: personalInfoConsent.description }}
        />
      </Flex.Column>
      {!isApplied && (
        <S.AgreeButton
          onClick={() => handleAgree(!isAgree)}
          isAgree={isAgree}
          justify="center"
          align="center"
          gap="1rem"
          pointer
        >
          네, 동의합니다.
          {isAgree ? <CheckCircleIcon /> : <CheckCircleOutlineIcon />}
        </S.AgreeButton>
      )}
    </S.Section>
  );
};

const S = {
  Section: styled(Flex.Row)`
    align-items: flex-end;
    background-color: ${({ theme }) => theme.palette.primary.light};
    border: 1px solid ${({ theme }) => theme.palette.primary.main};
    border-radius: 1rem;
    display: flex;
    flex-direction: row;
    gap: 1rem;
    justify-content: space-between;
    margin: 0 1rem;
    padding: 1rem 1.5rem;
  `,
  ConsentText: styled(Text)`
    ${({ theme }) => theme.typography.body2}
  `,
  AgreeButton: styled(Flex.Row)<{ isAgree: boolean }>`
    background-color: ${({ theme, isAgree }) =>
      isAgree ? theme.palette.variant.default : 'none'};
    border: 1px solid ${({ theme }) => theme.palette.grey400};
    border-radius: 1rem;
    flex-shrink: 0;
    height: fit-content;
    padding: 0.5rem 1rem;
    width: fit-content;

    &:hover,
    &:active {
      background-color: ${({ theme }) => theme.palette.variant.grey};
    }
  `,
};
