import { Flex } from '@/components';
import { drawerItems } from '@/constants/drawerItems';
import { navigationBarHeight } from '@/constants/layoutSize';
import { getOpacityColor } from '@/utils/getOpacityColor';
import { styled } from '@mui/material';
import { useMemo } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const customOrder = ['조회', '등록', '대시보드', '활동', '장학금', '프로필'];

const NavigationBar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const navigationItems = useMemo(() => {
    return [...drawerItems].sort(
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
    >
      {navigationItems.map(item => (
        <S.Navigation
          key={`navigation-${item.text}`}
          justify="center"
          align="center"
          onClick={() => navigate(item.route)}
        >
          <S.Item
            selected={location.pathname === item.route}
            justify="center"
            align="center"
            pointer
          >
            {location.pathname === item.route ? (
              <item.selectedIcon />
            ) : (
              <item.icon />
            )}
            {item.shortText}
          </S.Item>
        </S.Navigation>
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
  Navigation: styled(Flex.Column)`
    ${({ theme }) => theme.typography.body2};
    height: 100%;
    width: 100%;
  `,
  Item: styled(Flex.Column)<{ selected: boolean }>`
    background-color: ${({ selected, theme }) =>
      selected ? theme.palette.white : 'none'};
    border-radius: 0.5rem;
    color: ${({ selected, theme }) =>
      selected ? theme.palette.primary.main : theme.palette.white};
    height: 90%;
    width: 90%;
  `,
};
