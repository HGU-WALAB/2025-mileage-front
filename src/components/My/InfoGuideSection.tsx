import { CheckIcon } from '@/assets';
import { Flex, Heading, Text } from '@/components';
import { useAuthStore } from '@/stores';
import { boxShadow } from '@/styles/common';
import { styled, useTheme } from '@mui/material';

const guides = (currentSemester: string) => [
  `학년과 학기 정보는 ${currentSemester}학기를 기준으로 표시됩니다.`,
  '반드시 학부와 전공 정보를 확인한 후, 장학금 신청 대상인 경우에만 신청하세요.',
  '정보가 다르다면 아래의 업데이트 버튼을 눌러 자동으로 최신 정보로 갱신하세요.',
];

const InfoGuideSection = () => {
  const theme = useTheme();
  const { currentSemester } = useAuthStore();

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
        {guides(currentSemester ?? '').map(guide => (
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

export default InfoGuideSection;

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
