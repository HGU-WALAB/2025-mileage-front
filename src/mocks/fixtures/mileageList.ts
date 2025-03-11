import { MileageResponse } from '@/types/mileage';

export const mockMileageList: MileageResponse[] = [
  {
    subitemId: 1,
    subitemName: '기술 스택 학습',
    categoryId: 101,
    categoryName: '프로그래밍 언어',
    capabilityId: 1001,
    capabilityName: 'JavaScript',
    milestoneCount: 10,
    semester: '2025-01',
    done: true,
    description: 'JavaScript 기본 문법 학습 및 간단한 프로젝트 구현',
    isEtcActioned: false,
  },
  {
    subitemId: 2,
    subitemName: '알고리즘 풀이',
    categoryId: 102,
    categoryName: '문제 해결',
    capabilityId: 1002,
    capabilityName: '알고리즘 문제 풀이',
    milestoneCount: 5,
    semester: '2025-02',
    done: false,
    description: '프로그래밍 문제 해결을 위한 알고리즘 문제 풀이 10개 이상',
    isEtcActioned: true,
  },
  {
    subitemId: 3,
    subitemName: '클린 코드 작성',
    categoryId: 103,
    categoryName: '소프트웨어 품질',
    capabilityId: 1003,
    capabilityName: '코드 리뷰',
    milestoneCount: 7,
    semester: '2024-01',
    done: true,
    description: '클린 코드 작성과 코드 리뷰 진행',
    isEtcActioned: false,
  },
  {
    subitemId: 4,
    subitemName: '팀 프로젝트 진행',
    categoryId: 101,
    categoryName: '프로그래밍 언어',
    capabilityId: 1004,
    capabilityName: 'Git과 협업 도구 사용',
    milestoneCount: 15,
    semester: '2024-02',
    done: true,
    description: 'Git을 이용한 버전 관리와 협업 툴 사용법 학습',
    isEtcActioned: false,
  },
  {
    subitemId: 5,
    subitemName: '프론트엔드 프레임워크 학습',
    categoryId: 102,
    categoryName: '문제 해결',
    capabilityId: 1005,
    capabilityName: 'React',
    milestoneCount: 12,
    semester: '2023-02',
    done: false,
    description: 'React를 활용한 SPA 프로젝트 구현',
    isEtcActioned: true,
  },
  {
    subitemId: 6,
    subitemName: '서버 개발 학습',
    categoryId: 103,
    categoryName: '소프트웨어 품질',
    capabilityId: 1006,
    capabilityName: 'Node.js',
    milestoneCount: 8,
    semester: '2026-02',
    done: true,
    description: 'Node.js를 이용한 서버 구축 및 API 개발',
    isEtcActioned: false,
  },
];
