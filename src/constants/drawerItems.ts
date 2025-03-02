import {
  MileageAddIcon,
  MileageListIcon,
  ScholarshipIcon,
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
    text: '마일리지 조회',
    icon: MileageListIcon,
    route: ROUTE_PATH.mileageList,
  },
  {
    id: 3,
    text: '마일리지 등록',
    icon: MileageAddIcon,
    route: ROUTE_PATH.newMileage,
  },
  {
    id: 4,
    text: '장학금 신청',
    icon: ScholarshipIcon,
    route: ROUTE_PATH.scholarship,
  },
];

export default drawerItems;
