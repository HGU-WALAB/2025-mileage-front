// GitHub Repository 정보
export interface GitHubRepository {
  id: number;
  name: string;
  full_name: string;
  description: string;
  stargazers_count: number;
  forks_count: number;
  open_issues_count: number;
  language: string;
  updated_at: string;
}

// GitHub 기여자 정보
export interface GitHubContributor {
  login: string;
  contributions: number;
  avatar_url: string;
  html_url: string;
}

// 주별 커밋 활동
export interface GitHubCommitActivity {
  week: number;
  total: number;
  days: number[];
}

// 기여자별 통계
export interface GitHubContributorStats {
  author: {
    login: string;
  };
  total: number;
  weeks: {
    w: number;
    a: number;
    d: number;
    c: number;
  }[];
}

// 커밋 정보
export interface GitHubCommit {
  sha: string;
  commit: {
    author: {
      name: string;
      date: string;
    };
    message: string;
  };
  author: {
    login: string;
  };
  html_url: string;
}

// GitHub Activity Dashboard 데이터
export interface GitHubActivityData {
  repository: GitHubRepository;
  contributors: GitHubContributor[];
  commitActivity: GitHubCommitActivity[];
  contributorStats: GitHubContributorStats[];
  recentCommits: GitHubCommit[];
}

