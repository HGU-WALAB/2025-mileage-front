import { QUERY_KEYS } from '@/constants/queryKeys';
import { useQuery, useSuspenseQuery } from '@tanstack/react-query';

import { getProject, getProjectThumbnail } from '../apis/project';
import { ProjectResponse } from '../types/project';
import { useEffect, useState } from 'react';

export const useGetProjectQuery = (projectId: string) => {
  const { data, ...rest } = useSuspenseQuery<ProjectResponse>({
    queryKey: [QUERY_KEYS.project, projectId],
    queryFn: () => getProject({ projectId }),
  });

  return { project: data, ...rest };
};

export const useGetThumbnailQuery = (thumbnail: string | null) => {
  const isEnabled = !!thumbnail;

  const { data, ...rest } = useQuery<Blob | null>({
    queryKey: [QUERY_KEYS.projectThumbnail, thumbnail],
    queryFn: () => thumbnail ? getProjectThumbnail(thumbnail) : Promise.resolve(null),
    enabled: isEnabled,
  });

  const [objectUrl, setObjectUrl] = useState<string>('');
  
  useEffect(() => {
    if (data) {
      const url = URL.createObjectURL(data);
      setObjectUrl(url);
      return () => URL.revokeObjectURL(url);
    }
  }, [data]);
  
  return { thumbnail: objectUrl, ...rest };
}
