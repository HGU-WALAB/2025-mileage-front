import { ArrowRightIcon, AwardListIcon } from '@/assets';
import { Flex, Text } from '@/components';
import { ROUTE_PATH } from '@/constants/routePath';
import { boxShadow } from '@/styles/common';
import { styled, useTheme } from '@mui/material';
import { useNavigate } from 'react-router-dom';

export const AwardPageForwardButton = () => {
  const theme = useTheme();
  const navigate = useNavigate();

  return (
    <S.Container
      width="100%"
      justify="space-between"
      backgroundColor={theme.palette.primary.light}
      onClick={() => navigate(ROUTE_PATH.award)}
    >
      <Flex.Row
        width="fit-content"
        backgroundColor="white"
        padding=".25rem .5rem"
        style={{
          zIndex: 1,
          borderRadius: '.5rem',
          border: `2px solid ${theme.palette.primary.main}`,
        }}
      >
        <Text as="p" style={{ fontSize: '1.25rem' }}>
          전체 수상 내역 조회하기
        </Text>
      </Flex.Row>
      <Flex direction="row-reverse" style={{ zIndex: 1 }}>
        <ArrowRightIcon width={'80px'} height={'50px'} />
      </Flex>
      <AwardListIcon
        width={250}
        height={250}
        style={{
          position: 'absolute',
          zIndex: 0,
          top: -50,
          right: -20,
          opacity: '50%',
        }}
      />
    </S.Container>
  );
};

const S = {
  Container: styled(Flex.Column)`
    background-color: ${({ theme }) => theme.palette.variant.default};
    border-radius: 1rem;
    cursor: pointer;
    ${boxShadow}
    min-height: 75px;
    overflow: hidden;
    padding: 1.5rem;
    position: relative;
    transition:
      transform 0.2s ease,
      box-shadow 0.2s ease;

    &:hover {
      box-shadow: 0 6px 16px rgb(0 0 0 / 10%);
      transform: translateY(-4px);
    }
  `,
};
