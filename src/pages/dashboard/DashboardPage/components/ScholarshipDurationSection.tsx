import { Flex, Text } from '@/components';
import { ROUTE_PATH } from '@/constants/routePath';
import { MAX_RESPONSIVE_WIDTH } from '@/constants/system';
import { useAuthStore } from '@/stores';
import { boxShadow } from '@/styles/common';
import { getFormattedDateFullYear } from '@/utils/getDate';
import { styled, useMediaQuery } from '@mui/material';
import { useNavigate } from 'react-router-dom';

import { useScholarshipDuration } from '@mileage/hooks/useScholarshipDuration';

export const ScholarshipDurationSection = () => {
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
      pointer
    >
      <S.LabelBox>신청기간</S.LabelBox>
      {isScholarshipDuration ? (
        <Flex.Column>
          <Text>{`${currentSemester} 마일리지 장학금 신청`}</Text>
          <Text>
            {`${getFormattedDateFullYear(scholarshipDuration?.regStart ?? '')} ~ ${getFormattedDateFullYear(scholarshipDuration?.regEnd ?? '')}`}
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
