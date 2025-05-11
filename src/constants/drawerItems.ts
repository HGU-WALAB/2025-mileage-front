import {
  AwardListBlueIcon,
  AwardListIcon,
  DashboardBlueIcon,
  DashboardIcon,
  MileageAddBlueIcon,
  MileageAddIcon,
  MileageListBlueIcon,
  MileageListIcon,
  ScholarshipBlueIcon,
  ScholarshipIcon,
  UserBlueIcon,
  UserIcon,
} from '@/assets';
import { ROUTE_PATH } from '@/constants/routePath';

export const drawerItems = [
  {
    text: '대시보드',
    shortText: '대시보드',
    icon: DashboardIcon,
    selectedIcon: DashboardBlueIcon,
    route: ROUTE_PATH.dashboard,
  },
  {
    text: '마일리지 조회',
    shortText: '조회',
    icon: MileageListIcon,
    selectedIcon: MileageListBlueIcon,
    route: ROUTE_PATH.mileageList,
  },
  {
    text: '마일리지 등록',
    shortText: '등록',
    icon: MileageAddIcon,
    selectedIcon: MileageAddBlueIcon,
    route: ROUTE_PATH.newMileage,
  },
  {
    text: '상장 조회',
    shortText: '상장',
    icon: AwardListIcon,
    selectedIcon: AwardListBlueIcon,
    route: ROUTE_PATH.award,
  },
  {
    text: '프로젝트',
    shortText: '프로젝트',
    icon: AwardListIcon,
    selectedIcon: AwardListBlueIcon,
    route: ROUTE_PATH.project,
  },
  {
    text: '장학금 신청',
    shortText: '장학금 신청',
    icon: ScholarshipIcon,
    selectedIcon: ScholarshipBlueIcon,
    route: ROUTE_PATH.scholarship,
  },
  {
    text: '프로필',
    shortText: '프로필',
    icon: UserIcon,
    selectedIcon: UserBlueIcon,
    route: ROUTE_PATH.myPage,
  },
];
