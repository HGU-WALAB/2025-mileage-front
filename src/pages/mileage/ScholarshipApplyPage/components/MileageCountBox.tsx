import { Flex } from '@/components';
import { ROUTE_PATH } from '@/constants/routePath';
import { MAX_RESPONSIVE_WIDTH } from '@/constants/system';
import { useAuthStore } from '@/stores';
import { boxShadow } from '@/styles/common';
import { styled, useMediaQuery } from '@mui/material';
import { useNavigate } from 'react-router-dom';

import { useGetMileageQuery } from '../../hooks/useGetMileageQuery';

export const MileageCountBox = () => {
  const isMobile = useMediaQuery(MAX_RESPONSIVE_WIDTH);
  const navigate = useNavigate();

  const { currentSemester } = useAuthStore();
  const { data: mileageList } = useGetMileageQuery({
    semester: currentSemester,
    done: 'Y',
  });

  const handleClick = () => {
    navigate(ROUTE_PATH.mileageList);
  };

  const text = isMobile ? '마일리지 건수' : '마일리지 항목 건수';

  return (
    <S.CountContainer
      align="center"
      onClick={handleClick}
      isMobile={isMobile}
      pointer
    >
      <Flex.Row style={{ fontSize: isMobile ? '0.75rem' : '1rem' }}>
        {text}
      </Flex.Row>
      <Flex.Row align="baseline" gap=".5rem">
        <S.CountNumber isMobile={isMobile}>
          {mileageList?.length ?? '-'}
        </S.CountNumber>
        건
      </Flex.Row>
    </S.CountContainer>
  );
};

const S = {
  CountContainer: styled(Flex.Column)<{ isMobile: boolean }>`
    background-color: ${({ theme }) => theme.palette.white};
    border-radius: 1rem;
    color: ${({ theme }) => theme.palette.black};
    height: ${({ isMobile }) => (isMobile ? '80px' : '110px')};
    padding: ${({ isMobile }) => (isMobile ? '.5rem' : '1rem')};
    position: absolute;
    right: 5%;
    top: -30%;
    width: ${({ isMobile }) => (isMobile ? '100px' : '200px')};
    ${boxShadow}
  `,
  CountNumber: styled(Flex.Row)<{ isMobile: boolean }>`
    color: ${({ theme }) => theme.palette.primary.main};
    font-size: ${({ isMobile }) => (isMobile ? '2rem' : '2.5rem')};
    font-weight: bold;
  `,
};
