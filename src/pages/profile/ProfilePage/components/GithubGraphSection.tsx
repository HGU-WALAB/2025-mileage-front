import { GithubGraph } from '../../components/GithubGraph';
import { useGetProfileQuery } from '../../hooks/useGetProfileQuery';

export const GithubGraphSection = () => {
  const { profile } = useGetProfileQuery();

  const githubID = profile.github_link
    ? profile.github_link.split('/').filter(Boolean).pop()
    : undefined;

  return <GithubGraph githubID={githubID} />;
};
