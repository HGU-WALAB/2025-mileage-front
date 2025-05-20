import { GithubGraph } from '../../components/GithubGraph';
import { useGetShareProfileQuery } from '../../hooks/useGetShareProfileQuery';

export const GithubGraphSection = () => {
  const { profile } = useGetShareProfileQuery();

  const githubID = profile?.github_link
    ? profile.github_link.split('/').filter(Boolean).pop()
    : undefined;

  return <GithubGraph githubID={githubID} />;
};
