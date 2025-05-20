import { ROUTE_PATH } from '@/constants/routePath';

export const headerItems = {
  [ROUTE_PATH.dashboard]: '대시보드',
  [ROUTE_PATH.mileageList]: '마일리지 조회',
  [ROUTE_PATH.newMileage]: '마일리지 등록',
  [ROUTE_PATH.archive]: '활동 아카이브',
  [ROUTE_PATH.award]: '수상 내역',
  [ROUTE_PATH.project]: '프로젝트',
  [ROUTE_PATH.newProject]: '프로젝트 추가',
  [`${ROUTE_PATH.project}/:id`]: '프로젝트',
  [`${ROUTE_PATH.project}/:id/edit`]: '프로젝트 수정',
  [ROUTE_PATH.scholarship]: '장학금 신청',
  [ROUTE_PATH.profile]: '프로필',
};
