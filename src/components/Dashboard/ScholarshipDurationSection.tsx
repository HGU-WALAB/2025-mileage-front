import { Flex, Text } from '@/components';
import { ROUTE_PATH } from '@/constants/routePath';
import { MAX_RESPONSIVE_WIDTH } from '@/constants/system';
import { useScholarshipDuration } from '@/hooks';
import { useAuthStore } from '@/stores';
import { boxShadow } from '@/styles/common';
import { getFormattedDate } from '@/utils/getDate';
import { styled, useMediaQuery } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const ScholarshipDurationSection = () => {
  const isMobile = useMediaQuery(MAX_RESPONSIVE_WIDTH);
  const navigate = useNavigate();
  const { currentSemester } = useAuthStore();

  const { scholarshipDuration, isScholarshipDuration } =
    useScholarshipDuration();

  return (
    <S.DateContainer
      justify="flex-start"
      align="center"
      gap=".5rem"
      onClick={() => navigate(ROUTE_PATH.scholarship)}
      isMobile={isMobile}
    >
      <S.LabelBox>신청기간</S.LabelBox>
      {isScholarshipDuration ? (
        <Flex.Column>
          <Text>{`${currentSemester} 마일리지 장학금 신청`}</Text>
          <Text>
            {`${getFormattedDate(scholarshipDuration?.regStart ?? '')} ~ ${getFormattedDate(scholarshipDuration?.regEnd ?? '')}`}
          </Text>
        </Flex.Column>
      ) : (
        <Text>
          {`현재 ${currentSemester} 마일리지 장학금 신청 기간이 아닙니다.`}
        </Text>
      )}
    </S.DateContainer>
  );
};

export default ScholarshipDurationSection;

const S = {
  DateContainer: styled(Flex.Row)<{ isMobile: boolean }>`
    background-color: ${({ theme }) => theme.palette.white};
    border-radius: 0.5rem;
    min-height: 60px;
    padding: 0.5rem 1rem;
    width: ${({ isMobile }) => (isMobile ? '100%' : 'fit-content')};
    ${boxShadow}
  `,
  LabelBox: styled(Flex.Row)`
    background-color: ${({ theme }) => theme.palette.primary.main};
    border-radius: 0.25rem;
    color: ${({ theme }) => theme.palette.white};
    padding: 0.25rem;
    width: fit-content;
  `,
};
