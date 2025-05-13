import { Flex, Heading } from '@/components';
import { styled } from '@mui/material';

import { infoLabels } from '../../constants/InfoLabels';

interface Props {
  info: [string, string];
}

export const InfoField = ({ info }: Props) => {
  const [key, value] = info;

  if (key.includes('major'))
    return (
      <S.InfoRow key={key}>
        <Heading as="h3" style={{ fontWeight: 'bold' }}>
          {key === 'major1' && '전공'}
        </Heading>
        <Flex.Row gap="1rem">
          <S.MajorBox align="center" justify="center">
            <Heading as="h4">{infoLabels[key]}</Heading>
          </S.MajorBox>
          <S.Value align="center">
            <Heading as="h4">{value}</Heading>
          </S.Value>
        </Flex.Row>
      </S.InfoRow>
    );

  return (
    <S.InfoRow key={key}>
      <Heading as="h3" style={{ fontWeight: 'bold' }}>
        {infoLabels[key]}
      </Heading>
      <S.Value align="center">
        <Heading as="h4">{value}</Heading>
      </S.Value>
    </S.InfoRow>
  );
};

const S = {
  InfoRow: styled(Flex.Column)`
    gap: 0.5rem;
    justify-content: space-between;
    padding: 1rem 0;
  `,
  Value: styled(Flex.Row)`
    background-color: ${({ theme }) => theme.palette.primary.light};
    border-radius: 1rem;
    height: 55px;
    padding-left: 1rem;
    width: 100%;
  `,
  MajorBox: styled(Flex.Row)`
    background-color: ${({ theme }) => theme.palette.primary.main};
    border-radius: 1rem;
    color: ${({ theme }) => theme.palette.white};
    height: 55px;
    width: 50%;
  `,
};
