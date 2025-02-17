import { CheckIcon } from '@/assets';
import Flex from '@/components/_common/Flex/Flex';
import Heading from '@/components/_common/Heading/Heading';
import Text from '@/components/_common/Text/Text';
import { getOpacityColor } from '@/utils/getOpacityColor';
import { styled, useTheme } from '@mui/material';

const guides = [
  'SW 관련 자격증 또는 개인별 추가 실적 제출',
  '첨부파일은 이미지파일 (jpg, png) 또는 pdf만 업로드 가능',
  '업로드 할 첨부파일 : 자격증 사본 또는 실적을 증빙할 수 있는 서류 사본',
];

const GuideDescSection = () => {
  const theme = useTheme();
  return (
    <S.Section
      width="100%"
      justify="space-between"
      align="center"
      padding="1rem"
      backgroundColor={theme.palette.variant.default}
    >
      <Flex.Column align="center" style={{ color: theme.palette.primary.main }}>
        <Heading as="h2">자격증 및 기타실적 등록</Heading>
        <Heading as="h2">가이드라인</Heading>
      </Flex.Column>

      <S.GuideWrapper
        padding="1rem"
        // backgroundColor={theme.palette.primary.light}
      >
        {guides.map(guide => (
          <Flex.Row align="center" gap="0.25rem" key={guide}>
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

export default GuideDescSection;

const S = {
  Section: styled(Flex.Row)`
    border-radius: 1rem;
    box-shadow: ${({ theme }) =>
      `0 4px 16px ${getOpacityColor(theme.palette.black, 0.1)}`};
  `,
  GuideWrapper: styled(Flex.Column)`
    background-color: #edf2ff;
    border: 1px solid #bbd0ff;
    border-radius: 0.4rem;
  `,
};
