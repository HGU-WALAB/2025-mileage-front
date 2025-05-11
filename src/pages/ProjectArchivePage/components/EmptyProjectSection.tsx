import { Flex, Heading, Text } from '@/components';

export const EmptyProjectSection = () => {
  return (
    <Flex.Column
      width="100%"
      align="center"
      justify="center"
      padding="4rem 1rem"
    >
      <Flex.Row margin="1rem" style={{ fontSize: '3rem' }}>
        📭
      </Flex.Row>
      <Heading as={'h2'} color="grey">
        아직 등록된 프로젝트가 없어요
      </Heading>
      <Text as="p" color="grey">
        첫 번째 프로젝트를 추가해보세요!
      </Text>
    </Flex.Column>
  );
};
