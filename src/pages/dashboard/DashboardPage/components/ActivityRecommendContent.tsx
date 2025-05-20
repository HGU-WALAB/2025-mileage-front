import { Flex, Heading, Text } from '@/components';
import { styled } from '@mui/material';

import { useGetActivityRecommendQuery } from '../../hooks/useGetActivityRecommendQuery';

export const ActivityRecommendContent = () => {
  const { activityRecommend } = useGetActivityRecommendQuery();

  if (!activityRecommend) return null;
  return (
    <Flex.Column width="100%">
      <Flex.Row align="center" gap="0.5rem">
        <Text as="p" style={{ fontWeight: 500 }}>
          ⚠️ 현재 상대적으로 부족한 역량은
          <strong style={{ color: '#1976d2' }}>
            {' '}
            "{activityRecommend.capabilityName}"
          </strong>
          이에요.
        </Text>
      </Flex.Row>

      <Text as="p" style={{ marginTop: '.5rem' }}>
        하지만 걱정 마세요. 아래 활동들을 통해 충분히 성장할 수 있어요!
      </Text>

      <Heading as="h4" style={{ fontSize: '1rem', margin: '2rem 0 0.5rem' }}>
        💡 이런 활동을 추천드려요:
      </Heading>

      <S.RecommendBox justify="center" align="center">
        <Text bold>{activityRecommend.suggestion.join(', ')}</Text>
      </S.RecommendBox>
    </Flex.Column>
  );
};

const S = {
  RecommendBox: styled(Flex.Row)`
    background-color: ${({ theme }) => theme.palette.primary.light};
    border: 2px solid ${({ theme }) => theme.palette.primary.main};
    border-radius: 1rem;
    color: ${({ theme }) => theme.palette.primary.main};
    padding: 2rem;
    width: 100%;
  `,
};
