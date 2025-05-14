import { Flex } from '@/components';
import { MAX_RESPONSIVE_WIDTH } from '@/constants/system';
import { useAuthStore } from '@/stores';
import { boxShadow } from '@/styles/common';
import { getOpacityColor } from '@/utils/getOpacityColor';
import { styled, useMediaQuery } from '@mui/material';
import { useMemo } from 'react';

export const ScholarshipStudentTypeSection = () => {
  const isMobile = useMediaQuery(MAX_RESPONSIVE_WIDTH);
  const { user } = useAuthStore();

  const text = useMemo(() => {
    return user.studentType !== '기타' && user.term < 10
      ? `${user.studentType} 마일리지 장학금 신청 대상자입니다!`
      : '마일리지 장학금 신청 대상이 아닙니다.';
  }, [user]);

  return (
    <S.RowContainer isMobile={isMobile} justify="center">
      <S.BlueWrapper isMobile={isMobile} justify="center">
        {text}
      </S.BlueWrapper>
    </S.RowContainer>
  );
};

const S = {
  RowContainer: styled(Flex.Row)<{ isMobile: boolean }>`
    background-color: ${({ theme }) => theme.palette.white};
    border-radius: 0.5rem;
    min-height: 60px;
    min-width: ${({ isMobile }) => (isMobile ? '100%' : '340px')};
    padding: 0.5rem 1rem;
    ${boxShadow}
  `,
  BlueWrapper: styled(Flex.Row)<{ isMobile: boolean }>`
    background-color: ${({ theme }) => theme.palette.primary.light};
    border: 1px solid
      ${({ theme }) => getOpacityColor(theme.palette.primary.main, 0.5)};
    border-radius: 0.5rem;
    color: ${({ theme }) => theme.palette.primary.main};
    padding: 0.5rem;
    width: ${({ isMobile }) => (isMobile ? '100%' : '320px')};
    ${({ theme }) => theme.typography.h4}
  `,
};
