import { CheckIcon } from '@/assets';
import { Flex, Heading, Text } from '@/components';
import { MAX_RESPONSIVE_WIDTH } from '@/constants/system';
import { boxShadow } from '@/styles/common';
import { styled, useMediaQuery, useTheme } from '@mui/material';

const guides = [
  'SW 관련 자격증 또는 개인별 추가 실적 제출',
  '첨부파일은 pdf만 업로드 가능',
  '업로드 할 첨부파일 : 자격증 사본 또는 실적을 증빙할 수 있는 서류 사본',
];

const GuideDescSection = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(MAX_RESPONSIVE_WIDTH);

  return (
    <S.RowSection
      width="100%"
      justify={isMobile ? 'center' : 'space-between'}
      align="center"
      padding={isMobile ? '1rem' : '1rem 2rem'}
      backgroundColor={theme.palette.variant.default}
      wrap="wrap"
      gap="1rem"
    >
      <Flex.Column align="center" style={{ color: theme.palette.primary.main }}>
        <Heading as="h3">자격증 및 기타실적 등록</Heading>
        <Heading as="h3">가이드라인</Heading>
      </Flex.Column>

      <S.GuideWrapper padding=".5rem 1rem">
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
    </S.RowSection>
  );
};

export default GuideDescSection;

const S = {
  RowSection: styled(Flex.Row)`
    border-radius: 1rem;
    ${boxShadow}
  `,
  GuideWrapper: styled(Flex.Column)`
    background-color: ${({ theme }) => theme.palette.primary.light};
    border: 1px solid ${({ theme }) => theme.palette.primary.dark};
    border-radius: 0.4rem;
  `,
};
