import { QUERY_KEYS } from '@/constants/queryKeys';
import { useSuspenseQuery } from '@tanstack/react-query';

import { getProfile, getProfileImage } from '../apis/profile';
import { ProfileImage, ProfileResponse } from '../types/profile';
import { useEffect, useState } from 'react';

export const useGetProfileQuery = () => {
  const { data, ...rest } = useSuspenseQuery<ProfileResponse>({
    queryKey: [QUERY_KEYS.profile],
    queryFn: () => getProfile(),
  });

  return { profile: data, ...rest };
};

export const useGetProfileImageQuery = (profileImageUrl: string | null) => {
  const { data, ...rest } = useSuspenseQuery<ProfileImage>({
    queryKey: [QUERY_KEYS.profileImage],
    queryFn: () => getProfileImage(profileImageUrl ?? ''),
  });

  const [objectUrl, setObjectUrl] = useState('');
  
  useEffect(() => {
    if (data) {
      const url = URL.createObjectURL(data.image);
      setObjectUrl(url);
      return () => URL.revokeObjectURL(url);
    }
  }, [data]);
  
  return { image: objectUrl, ...rest };
}
