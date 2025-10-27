import { http } from '@/apis/http';
import {
  GitHubRepository,
  GitHubContributor,
  GitHubCommitActivity,
  GitHubContributorStats,
  GitHubCommit,
  GitHubActivityData,
} from '../types/github';

const GITHUB_API_BASE = 'https://api.github.com';

// GitHub 레포지토리 정보 가져오기
export const getGitHubRepository = async (owner: string, repo: string): Promise<GitHubRepository> => {
  const response = await http.get<GitHubRepository>(`${GITHUB_API_BASE}/repos/${owner}/${repo}`);
  return response;
};

// GitHub 기여자 목록 가져오기
export const getGitHubContributors = async (owner: string, repo: string): Promise<GitHubContributor[]> => {
  const response = await http.get<GitHubContributor[]>(`${GITHUB_API_BASE}/repos/${owner}/${repo}/contributors`);
  return response;
};

// 주별 커밋 활동 가져오기
export const getGitHubCommitActivity = async (owner: string, repo: string): Promise<GitHubCommitActivity[]> => {
  const response = await http.get<GitHubCommitActivity[]>(`${GITHUB_API_BASE}/repos/${owner}/${repo}/stats/commit_activity`);
  return response;
};

// 기여자별 통계 가져오기
export const getGitHubContributorStats = async (owner: string, repo: string): Promise<GitHubContributorStats[]> => {
  const response = await http.get<GitHubContributorStats[]>(`${GITHUB_API_BASE}/repos/${owner}/${repo}/stats/contributors`);
  return response;
};

// 최근 커밋 가져오기
export const getGitHubRecentCommits = async (owner: string, repo: string, since?: string): Promise<GitHubCommit[]> => {
  const params = since ? `?since=${since}` : '';
  const response = await http.get<GitHubCommit[]>(`${GITHUB_API_BASE}/repos/${owner}/${repo}/commits${params}`);
  return response;
};

// GitHub URL에서 owner와 repo 추출
export const parseGitHubUrl = (url: string): { owner: string; repo: string } | null => {
  const githubRegex = /github\.com\/([^\/]+)\/([^\/]+)/;
  const match = url.match(githubRegex);
  
  if (match) {
    return {
      owner: match[1],
      repo: match[2].replace(/\.git$/, ''), // .git 제거
    };
  }
  
  return null;
};

// GitHub Activity Dashboard 전체 데이터 가져오기
export const getGitHubActivityData = async (githubLink: string): Promise<GitHubActivityData | null> => {
  const parsed = parseGitHubUrl(githubLink);
  
  if (!parsed) {
    return null;
  }
  
  const { owner, repo } = parsed;
  
  try {
    const [repository, contributors, commitActivity, contributorStats, recentCommits] = await Promise.all([
      getGitHubRepository(owner, repo),
      getGitHubContributors(owner, repo),
      getGitHubCommitActivity(owner, repo),
      getGitHubContributorStats(owner, repo),
      getGitHubRecentCommits(owner, repo, new Date(Date.now() - 30 * 24 * 60 * 60 * 1000).toISOString()), // 최근 30일
    ]);
    
    return {
      repository,
      contributors,
      commitActivity,
      contributorStats,
      recentCommits,
    };
  } catch (error) {
    console.error('GitHub API Error:', error);
    return null;
  }
};




