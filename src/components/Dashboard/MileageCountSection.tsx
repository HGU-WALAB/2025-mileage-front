import { Flex } from '@/components';
import { MAX_RESPONSIVE_WIDTH } from '@/constants/system';
import { useAuthStore } from '@/stores';
import { boxShadow } from '@/styles/common';
import { getOpacityColor } from '@/utils/getOpacityColor';
import { styled, useMediaQuery } from '@mui/material';
import { useMemo } from 'react';

const MileageCountSection = () => {
  const isMobile = useMediaQuery(MAX_RESPONSIVE_WIDTH);
  const { student } = useAuthStore();

  const text = useMemo(() => {
    return student.studentType !== '기타'
      ? `${student.studentType} 마일리지 장학금 신청 대상입니다!`
      : '마일리지 장학금 신청 대상이 아닙니다.';
  }, [student.studentType]);

  return (
    <S.RowContainer isMobile={isMobile} justify="center">
      <S.BlueWrapper isMobile={isMobile} justify="center">
        {text}
      </S.BlueWrapper>
    </S.RowContainer>
  );
};

export default MileageCountSection;

const S = {
  RowContainer: styled(Flex.Row)<{ isMobile: boolean }>`
    background-color: ${({ theme }) => theme.palette.white};
    border-radius: 0.5rem;
    height: 60px;
    padding: 0.5rem 1rem;
    width: ${({ isMobile }) => (isMobile ? '100%' : '340px')};
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
