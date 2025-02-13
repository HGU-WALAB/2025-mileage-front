import { ROUTE_PATH } from '@/constants/routePath';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import ImportContactsIcon from '@mui/icons-material/ImportContacts';
import SpaceDashboardIcon from '@mui/icons-material/SpaceDashboard';

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
    text: '새로운 마일리지 등록',
    icon: ImportContactsIcon,
    route: ROUTE_PATH.newMileage,
  },
  {
    id: 4,
    text: '마이페이지',
    icon: AccountCircleIcon,
    route: ROUTE_PATH.myPage,
  },
];

export default drawerItems;
