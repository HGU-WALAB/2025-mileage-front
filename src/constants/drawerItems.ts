import {
  AccountBalanceIcon,
  AccountCircleIcon,
  EmojiEventsIcon,
  ImportContactsIcon,
  SpaceDashboardIcon,
} from '@/assets';
import { ROUTE_PATH } from '@/constants/routePath';

const drawerItems = [
  {
    id: 1,
    text: '대시보드',
    icon: SpaceDashboardIcon,
    route: ROUTE_PATH.dashboard,
  },
  {
    id: 2,
    text: '마일리지 내역 조회',
    icon: EmojiEventsIcon,
    route: ROUTE_PATH.mileageList,
  },
  {
    id: 3,
    text: '마일리지 등록',
    icon: ImportContactsIcon,
    route: ROUTE_PATH.newMileage,
  },
  {
    id: 4,
    text: '장학금 신청',
    icon: AccountBalanceIcon,
    route: ROUTE_PATH.scholarship,
  },
  {
    id: 5,
    text: '마이페이지',
    icon: AccountCircleIcon,
    route: ROUTE_PATH.myPage,
  },
];

export default drawerItems;
