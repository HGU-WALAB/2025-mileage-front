import { Flex, Heading } from '@/components';
import { MileageTable } from '@/components/MileageList';
import { useGroupedMileageList } from '@/hooks';
import { styled } from '@mui/material';

const MileageTableListSection = () => {
  const groupedMileageList = useGroupedMileageList();

  return (
    <>
      {groupedMileageList.map((list, index) => (
        <Flex.Column padding="1rem 0" key={list.categoryId}>
          <S.CategoryTitle>
            <Heading as={'h3'}>
              {index + 1}. {list.categoryName}
            </Heading>
          </S.CategoryTitle>
          <MileageTable key={list.categoryId} mileageList={list.items} />
        </Flex.Column>
      ))}
    </>
  );
};

export default MileageTableListSection;

const S = {
  CategoryTitle: styled('div')`
    background-color: ${({ theme }) => theme.palette.primary.main};
    border-radius: 4px;
    color: ${({ theme }) => theme.palette.white};
    margin: 0.5rem 0;
    padding: 0.25rem 0.75rem;
    width: fit-content;
  `,
};
