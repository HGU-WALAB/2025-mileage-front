import Flex from '@/components/_common/Flex/Flex';
import { drawerItems } from '@/constants/drawerItems';
import { navigationBarHeight } from '@/constants/layoutSize';
import { getOpacityColor } from '@/utils/getOpacityColor';
import { styled } from '@mui/material';
import { useMemo } from 'react';
import { useNavigate } from 'react-router-dom';

const customOrder = ['조회', '등록', '대시보드', '장학금 신청', '프로필'];

const NavigationBar = () => {
  const navigate = useNavigate();
  const navigateItems = useMemo(() => {
    return drawerItems.sort(
      (a, b) =>
        customOrder.indexOf(a.shortText) - customOrder.indexOf(b.shortText),
    );
  }, [customOrder]);

  return (
    <S.Container
      height={`${navigationBarHeight}px`}
      width="100%"
      align="center"
      justify="space-between"
      padding="1rem"
    >
      {navigateItems.map(item => (
        <S.NavigateItem align="center" onClick={() => navigate(item.route)}>
          <item.icon />
          {item.shortText}
        </S.NavigateItem>
      ))}
    </S.Container>
  );
};

export default NavigationBar;

const S = {
  Container: styled(Flex.Row)`
    backdrop-filter: blur(1.875rem);
    background-color: ${({ theme }) =>
      getOpacityColor(theme.palette.white, 0.1)};
    bottom: 0;
    left: 0;
    position: fixed;
    z-index: 10;
  `,
  NavigateItem: styled(Flex.Column)`
    ${({ theme }) => theme.typography.body2};
    color: ${({ theme }) => theme.palette.white};
    width: 100%;
  `,
};
