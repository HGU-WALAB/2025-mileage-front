import { Flex, Heading, Title } from '@/components';
import { boxShadow } from '@/styles/common';
import { styled, useTheme } from '@mui/material';

// TODO: 추후 도메인 기반 구조 임포트로 변경 필요
import { useGroupedAwardList } from '@/pages/AwardArchivePage/hooks/useGroupedAwardList';

export const AwardArchiveSection = () => {
  const theme = useTheme();
  const { groupedAwardList } = useGroupedAwardList();

  return (
    <Flex.Column as={'section'}>
      <Title label="상장 아카이빙" />
      <Flex.Row gap="1rem">
        {groupedAwardList.map(group => (
          <S.Container height="200px" width="100%" padding="1rem" gap="1rem">
            <Heading>{group.awardType}</Heading>
            <Heading>{group.items.length}</Heading>
          </S.Container>
        ))}
        <S.Container
          height="200px"
          width="100%"
          padding="1rem"
          gap="1rem"
          backgroundColor={theme.palette.primary.light}
        >
          전체 상장 조회하기
        </S.Container>
      </Flex.Row>
    </Flex.Column>
  );
};

const S = {
  Container: styled(Flex.Column)`
    align-items: center;
    background-color: ${({ theme }) => theme.palette.variant.default};
    border-radius: 1rem;
    cursor: pointer;
    ${boxShadow}
    justify-content: center;
    min-width: 180px;
    padding: 1.5rem;
    text-align: center;
    transition:
      transform 0.2s ease,
      box-shadow 0.2s ease;

    &:hover {
      box-shadow: 0 6px 16px rgb(0 0 0 / 10%);
      transform: translateY(-4px);
    }
  `,
};
