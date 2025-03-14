import { Flex, Text } from '@/components';
import { ROUTE_PATH } from '@/constants/routePath';
import { useScholarshipDuration } from '@/hooks';
import { useAuthStore } from '@/stores';
import { boxShadow } from '@/styles/common';
import { getFormattedDate } from '@/utils/getDate';
import { styled, useTheme } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const ScholarshipDurationSection = () => {
  const theme = useTheme();
  const navigate = useNavigate();
  const { currentSemester } = useAuthStore();

  const { scholarshipDuration, isScholarshipDuration } =
    useScholarshipDuration();

  return (
    <S.DateContainer
      justify="center"
      align="center"
      onClick={() => navigate(ROUTE_PATH.scholarship)}
    >
      {isScholarshipDuration ? (
        <Text color={theme.palette.primary.main} bold>
          {`현재 ${currentSemester} 마일리지 장학금 신청 기간입니다. (신청기간 : ${getFormattedDate(scholarshipDuration?.isStart ?? '')} ~ ${getFormattedDate(scholarshipDuration?.isEnd ?? '')})`}
        </Text>
      ) : (
        <Text color={theme.palette.primary.main} bold>
          {`현재 ${currentSemester} 마일리지 장학금 신청 기간이 아닙니다.`}
        </Text>
      )}
    </S.DateContainer>
  );
};

export default ScholarshipDurationSection;

const S = {
  DateContainer: styled(Flex.Row)`
    background-color: ${({ theme }) => theme.palette.white};
    border-radius: 0.5rem;
    height: 60px;
    padding: 0.5rem 2rem;
    width: fit-content;
    ${boxShadow}
  `,
};
