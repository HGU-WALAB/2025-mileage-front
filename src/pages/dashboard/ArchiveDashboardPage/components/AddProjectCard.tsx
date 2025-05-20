import { Flex, Heading, Text } from '@/components';
import { ROUTE_PATH } from '@/constants/routePath';
import { styled } from '@mui/material';
import { useNavigate } from 'react-router-dom';

export const AddProjectCard = () => {
  const navigate = useNavigate();

  return (
    <S.Card
      width="100%"
      height="330px"
      onClick={() => navigate(ROUTE_PATH.newProject)}
    >
      <S.Placeholder
        width="100%"
        height="180px"
        justify="center"
        align="center"
      >
        📁 새 프로젝트 만들기
      </S.Placeholder>

      <Flex.Column
        height="150px"
        padding="1rem"
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
      </Flex.Column>
    </S.Card>
  );
};

const S = {
  Card: styled(Flex.Column)`
    border-radius: 12px;
    box-shadow: 0 4px 12px rgb(0 0 0 / 10%);
    cursor: pointer;
    max-width: 360px;
    overflow: hidden;
    transition: box-shadow 0.2s ease;

    &:hover,
    &:active {
      box-shadow: 0 4px 12px rgb(0 0 0 / 20%);
    }
  `,
  Placeholder: styled(Flex.Row)`
    background-color: ${({ theme }) => theme.palette.grey[200]};
    color: ${({ theme }) => theme.palette.text.disabled};
    font-size: 1.125rem;
    text-align: center;
  `,
};
