import { Flex, Heading, Text } from '@/components';
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
        <Heading as="h4" style={{ fontWeight: 'bold' }}>
          {key === 'major1' && '전공'}
        </Heading>
        <Flex.Row gap=".5rem">
          <S.MajorBox align="center" justify="center">
            <Heading as="h4">{infoLabels[key]}</Heading>
          </S.MajorBox>
          <S.Value align="center">
            <Text>{value}</Text>
          </S.Value>
        </Flex.Row>
      </S.InfoRow>
    );

  return (
    <S.InfoRow key={key}>
      <Heading as="h4" style={{ fontWeight: 'bold' }}>
        {infoLabels[key]}
      </Heading>

      <S.Value align="center">
        <Text>{value}</Text>
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
    border-radius: 0.5rem;
    height: 40px;
    overflow: hidden;
    padding-left: 0.5rem;
    width: 100%;
  `,
  MajorBox: styled(Flex.Row)`
    background-color: ${({ theme }) => theme.palette.primary.main};
    border-radius: 0.5rem;
    color: ${({ theme }) => theme.palette.white};
    height: 40px;
    width: 50%;
  `,
};
