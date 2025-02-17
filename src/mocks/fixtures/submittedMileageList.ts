import { SubmittedMileageResponse } from '@/types/mileage';

export const mockSubmittedMileageList: SubmittedMileageResponse[] = [
  {
    recordId: 1,
    subitemId: 101,
    subitemName: '대외활동',
    semester: '2025-1',
    description1: '학생회 활동',
    description2: '행사 기획 및 진행',
    file: null,
    // file: new File(['file content'], 'mileage_document.pdf', {
    //   type: 'application/pdf',
    // }),
    modDate: '2025-02-15',
  },
  {
    recordId: 2,
    subitemId: 102,
    subitemName: '봉사',
    semester: '2024-2',
    description1: '자원봉사 활동',
    description2: null,
    file: null,
    modDate: '2024-12-20',
  },
  {
    recordId: 3,
    subitemId: 105,
    subitemName: '교내활동',
    semester: '2023-1',
    description1: '학교 홍보대사 활동',
    description2: '입학 설명회 진행',
    file: null,
    // file: new File(['file content'], 'promo_activity.jpg', {
    //   type: 'image/jpeg',
    // }),
    modDate: '2023-05-18',
  },
];
