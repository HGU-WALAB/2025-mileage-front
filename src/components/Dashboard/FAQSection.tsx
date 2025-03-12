import { Accordion, Flex, Heading, Text } from '@/components';
import { FAQ } from '@/constants/faq';
import { MAX_RESPONSIVE_WIDTH } from '@/constants/system';
import { boxShadow } from '@/styles/common';
import { FAQListItem } from '@/types/faq';
import { styled, useMediaQuery, useTheme } from '@mui/material';

const FAQSection = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(MAX_RESPONSIVE_WIDTH);

  return (
    <S.Container height="fit-content" width="100%" gap="1rem">
      <Heading as="h2" color={theme.palette.primary.main}>
        자주 묻는 질문
      </Heading>
      <S.Grid isMobile={isMobile}>
        {FAQ.map(faq => (
          <Accordion
            title={faq.category}
            desc={<FAQDescBox list={faq.list} />}
          />
        ))}
      </S.Grid>
    </S.Container>
  );
};

export default FAQSection;

const FAQDescBox = ({ list }: { list: FAQListItem[] }) => {
  return (
    <Flex.Column
      height="fit-content"
      padding="0 1rem"
      style={{ minHeight: '250px' }}
    >
      <Flex.Column gap=".5rem">
        {list.map((item, index) => (
          <Flex.Column key={index}>
            <Text bold>{item.title}</Text>
            {item?.desc?.map((desc, i) => (
              <Text key={i} style={{ wordBreak: 'keep-all' }}>
                {desc}
              </Text>
            ))}
          </Flex.Column>
        ))}
      </Flex.Column>
    </Flex.Column>
  );
};

const S = {
  Container: styled(Flex.Column)`
    background-color: ${({ theme }) => theme.palette.white};
    border-radius: 1rem;
    margin-bottom: 2rem;
    padding: 1rem;
    ${boxShadow}
  `,
  Grid: styled('div')<{ isMobile: boolean }>`
    display: grid;
    gap: 1rem;
    grid-template-columns: ${({ isMobile }) =>
      isMobile ? 'repeat(1, 1fr)' : 'repeat(2, 1fr)'};
  `,
};
