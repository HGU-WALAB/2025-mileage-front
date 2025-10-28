export const PROJECT_STATUS_OPTIONS: string[] = ['전체', '진행', '종료', '보류'];

export const PROGRAMMING_LANGUAGE_OPTIONS: string[] = [
  '전체',
  'Python',
  'JavaScript',
  'TypeScript',
  'Java',
  'C#',
  'C++',
  'PHP',
  'Ruby',
  'C',
  'Go'
];

export const SORT_ORDER_OPTIONS: string[] = ['최신순', '업데이트 순'];

export type ProjectStatus = '전체' | '진행' | '종료' | '보류';
export type ProgrammingLanguage = '전체' | 'Python' | 'JavaScript' | 'TypeScript' | 'Java' | 'C#' | 'C++' | 'PHP' | 'Ruby' | 'C' | 'Go';
export type SortOrder = '최신순' | '업데이트 순';
