import { Flex, Heading, Text } from '@/components';
import { ROUTE_PATH } from '@/constants/routePath';
import { styled } from '@mui/material';
import { useNavigate } from 'react-router-dom';

export const AddProjectCard = () => {
  const navigate = useNavigate();

  return (
    <S.Card
      width="100%"
      height="280px"
      padding="1.25rem"
      gap="0.75rem"
      onClick={() => navigate(ROUTE_PATH.newProject)}
    >
      <Flex.Column
        height="auto"
        justify="center"
        align="center"
        gap="0.5rem"
      >
        <Heading as={'h3'} color="grey">
          아직 등록된 프로젝트가 없어요
        </Heading>
        <Text as="p" color="grey">
          첫 번째 프로젝트를 추가해보세요!
        </Text>
        <S.Placeholder
          width="100%"
          height="120px"
          justify="center"
          align="center"
        >
          📁 새 프로젝트 만들기
        </S.Placeholder>
      </Flex.Column>
    </S.Card>
  );
};

const S = {
  Card: styled(Flex.Column)`
    border-radius: 12px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
    cursor: pointer;
    width: 100%;
    height: 280px;
    overflow: hidden;
    transition: box-shadow 0.2s ease;

    @media (max-width: 900px) {
      height: 260px;
      padding: 1rem !important;
      gap: 0.5rem !important;
    }

    &:hover,
    &:active {
      box-shadow: 0 4px 16px rgba(0, 0, 0, 0.15);
    }
  `,
  Placeholder: styled(Flex.Row)`
    background-color: ${({ theme }) => theme.palette.grey[200]};
    color: ${({ theme }) => theme.palette.text.disabled};
    font-size: 1.125rem;
    text-align: center;
  `,
};
