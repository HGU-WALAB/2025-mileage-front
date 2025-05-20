import { QUERY_KEYS } from '@/constants/queryKeys';
import { useQuery, useSuspenseQuery } from '@tanstack/react-query';

import { getProfile, getProfileImage } from '../apis/profile';
import { ProfileResponse } from '../types/profile';
import { useEffect, useState } from 'react';

export const useGetProfileQuery = () => {
  const { data, ...rest } = useSuspenseQuery<ProfileResponse>({
    queryKey: [QUERY_KEYS.profile],
    queryFn: () => getProfile(),
  });

  return { profile: data, ...rest };
};

export const useGetProfileImageQuery = (profileImageUrl: string | null) => {
  const isEnabled = !!profileImageUrl;

  const { data, ...rest } = useQuery<Blob | null>({
    queryKey: [QUERY_KEYS.profileImage, profileImageUrl],
    queryFn: () => profileImageUrl ? getProfileImage(profileImageUrl) : Promise.resolve(null),
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
  
  return { profileImage: objectUrl, ...rest };
}
