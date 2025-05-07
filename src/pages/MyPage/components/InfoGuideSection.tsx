import { CheckIcon } from '@/assets';
import { Flex, Heading, Text } from '@/components';
import { boxShadow } from '@/styles/common';
import { styled, useTheme } from '@mui/material';

import { guides } from '../constants/infoGuide';

export const InfoGuideSection = () => {
  const theme = useTheme();

  return (
    <S.Section
      width="100%"
      justify="space-around"
      align="center"
      padding="1rem"
      gap="1rem"
      backgroundColor={theme.palette.variant.default}
      wrap="wrap"
    >
      <Flex.Column align="center" style={{ color: theme.palette.primary.main }}>
        <Heading as="h2">나의 정보 확인하기</Heading>
      </Flex.Column>

      <S.GuideWrapper padding=".5rem 1rem">
        {guides.map(guide => (
          <Flex.Row align="center" gap="0.25rem" key={guide.toString()}>
            <CheckIcon />
            <Text
              style={{
                ...theme.typography.body2,
              }}
            >
              {guide}
            </Text>
          </Flex.Row>
        ))}
      </S.GuideWrapper>
    </S.Section>
  );
};

const S = {
  Section: styled(Flex.Row)`
    border-radius: 1rem;
    ${boxShadow}
  `,
  GuideWrapper: styled(Flex.Column)`
    background-color: ${({ theme }) => theme.palette.primary.light};
    border: 1px solid ${({ theme }) => theme.palette.primary.dark};
    border-radius: 0.4rem;
  `,
};
