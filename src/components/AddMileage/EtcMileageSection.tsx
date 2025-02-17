import { Flex, Heading } from '@/components';
import { EtcMileageTable } from '@/components/AddMileage';
import { styled } from '@mui/material';

const EtcMileageSection = () => {
  return (
    <Flex.Column height="50%">
      <S.CategoryTitle>
        <Heading as={'h3'}>신청 가능 마일리지</Heading>
      </S.CategoryTitle>
      <EtcMileageTable />
    </Flex.Column>
  );
};

export default EtcMileageSection;

const S = {
  CategoryTitle: styled('div')`
    background-color: ${({ theme }) => theme.palette.primary.main};
    border-radius: 4px;
    color: ${({ theme }) => theme.palette.white};
    margin: 0.5rem 0;
    padding: 0.25rem 1.5rem;
    width: fit-content;
  `,
};
