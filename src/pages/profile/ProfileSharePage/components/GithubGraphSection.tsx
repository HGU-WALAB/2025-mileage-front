import { useGetShareProfileQuery } from '@/pages/profile/hooks/useGetShareProfileQuery';
import { GithubGraph } from '../../components/GithubGraph';

export const GithubGraphSection = () => {
  const { profile } = useGetShareProfileQuery();

  const githubID = profile?.github_link
    ? profile.github_link.split('/').filter(Boolean).pop()
    : undefined;

  return <GithubGraph githubID={githubID} />;
};
