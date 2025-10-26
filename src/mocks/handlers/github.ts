import { Error500, randomMswError } from '@/utils/mswError';
import { http, HttpResponse } from 'msw';
import {
  GitHubRepository,
  GitHubContributor,
  GitHubCommitActivity,
  GitHubContributorStats,
  GitHubCommit,
} from '@/pages/project/types/github';

// Mock 데이터 생성 함수들
const createMockRepository = (owner: string, repo: string): GitHubRepository => ({
  id: Math.floor(Math.random() * 1000000),
  name: repo,
  full_name: `${owner}/${repo}`,
  description: `자전거 투어링 앱 - SwiftUI 기반 iOS 애플리케이션`,
  stargazers_count: 0,
  forks_count: 0,
  open_issues_count: 0,
  language: 'Swift',
  updated_at: new Date().toISOString(),
});

const createMockContributors = (): GitHubContributor[] => [
  {
    login: 'LYH513',
    contributions: 1200,
    avatar_url: '/src/assets/imgs/user.png',
    html_url: 'https://github.com/LYH513',
  },
  {
    login: 'Giljjang',
    contributions: 800,
    avatar_url: '/src/assets/imgs/user.png',
    html_url: 'https://github.com/Giljjang',
  },
  {
    login: 'developer1',
    contributions: 600,
    avatar_url: '/src/assets/imgs/user.png',
    html_url: 'https://github.com/developer1',
  },
  {
    login: 'developer2',
    contributions: 400,
    avatar_url: '/src/assets/imgs/user.png',
    html_url: 'https://github.com/developer2',
  },
  {
    login: 'developer3',
    contributions: 200,
    avatar_url: '/src/assets/imgs/user.png',
    html_url: 'https://github.com/developer3',
  },
];

const createMockCommitActivity = (): GitHubCommitActivity[] => {
  const weeks = [];
  for (let i = 0; i < 12; i++) {
    weeks.push({
      week: Math.floor(Date.now() / 1000) - (i * 7 * 24 * 60 * 60),
      total: Math.floor(Math.random() * 50) + 10,
      days: Array.from({ length: 7 }, () => Math.floor(Math.random() * 10)),
    });
  }
  return weeks;
};

const createMockContributorStats = (): GitHubContributorStats[] => [
  {
    author: { login: 'LYH513' },
    total: 1200,
    weeks: Array.from({ length: 12 }, (_, i) => ({
      w: Math.floor(Date.now() / 1000) - (i * 7 * 24 * 60 * 60),
      a: Math.floor(Math.random() * 1000) + 100,
      d: Math.floor(Math.random() * 200) + 50,
      c: Math.floor(Math.random() * 20) + 5,
    })),
  },
  {
    author: { login: 'Giljjang' },
    total: 800,
    weeks: Array.from({ length: 12 }, (_, i) => ({
      w: Math.floor(Date.now() / 1000) - (i * 7 * 24 * 60 * 60),
      a: Math.floor(Math.random() * 800) + 50,
      d: Math.floor(Math.random() * 150) + 25,
      c: Math.floor(Math.random() * 15) + 3,
    })),
  },
];

const createMockCommits = (): GitHubCommit[] => [
  {
    sha: 'abc123def456',
    commit: {
      author: {
        name: 'LYH513',
        date: new Date(Date.now() - 1 * 24 * 60 * 60 * 1000).toISOString(),
      },
      message: 'Fix: Update SwiftUI navigation flow',
    },
    author: {
      login: 'LYH513',
    },
    html_url: 'https://github.com/LYH513/Tourding_FE/commit/abc123def456',
  },
  {
    sha: 'def456ghi789',
    commit: {
      author: {
        name: 'Giljjang',
        date: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000).toISOString(),
      },
      message: 'Feature: Add location tracking functionality',
    },
    author: {
      login: 'Giljjang',
    },
    html_url: 'https://github.com/LYH513/Tourding_FE/commit/def456ghi789',
  },
  {
    sha: 'ghi789jkl012',
    commit: {
      author: {
        name: 'LYH513',
        date: new Date(Date.now() - 3 * 24 * 60 * 60 * 1000).toISOString(),
      },
      message: 'Refactor: Improve MVVM architecture',
    },
    author: {
      login: 'LYH513',
    },
    html_url: 'https://github.com/LYH513/Tourding_FE/commit/ghi789jkl012',
  },
];

export const GitHubHandlers = [
  // GitHub Repository 정보
  http.get('https://api.github.com/repos/:owner/:repo', ({ params }) => {
    const { owner, repo } = params;
    
    const repository = createMockRepository(owner as string, repo as string);
    return HttpResponse.json(repository, { status: 200 });
  }),

  // GitHub 기여자 목록
  http.get('https://api.github.com/repos/:owner/:repo/contributors', ({ params }) => {
    const contributors = createMockContributors();
    return HttpResponse.json(contributors, { status: 200 });
  }),

  // 주별 커밋 활동
  http.get('https://api.github.com/repos/:owner/:repo/stats/commit_activity', () => {
    const commitActivity = createMockCommitActivity();
    return HttpResponse.json(commitActivity, { status: 200 });
  }),

  // 기여자별 통계
  http.get('https://api.github.com/repos/:owner/:repo/stats/contributors', () => {
    const contributorStats = createMockContributorStats();
    return HttpResponse.json(contributorStats, { status: 200 });
  }),

  // 최근 커밋
  http.get('https://api.github.com/repos/:owner/:repo/commits', () => {
    const commits = createMockCommits();
    return HttpResponse.json(commits, { status: 200 });
  }),
];
