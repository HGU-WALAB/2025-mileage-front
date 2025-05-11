export type AwardType = '교내' | '교외';

export interface AwardResponse {
  awardId: number;
  awardYear: string;
  awardDate: string;
  awardType: AwardType;

  contestName: string;
  awardName: string;
  organization: string;

  fileId: number | null;
  file: string | null;
  uniqueFileName: string | null;
}

export interface AwardFilterOption {
  awardType: AwardType | string;
  awardYear: string;
  keyword: string;
}
