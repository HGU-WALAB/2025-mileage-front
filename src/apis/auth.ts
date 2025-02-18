import { ENDPOINT } from '@/apis/endPoint';
import { http } from '@/apis/http';
import { AUTH_ACCESS_KEY } from '@/constants/auth';
import { AuthRequest, UserResponse } from '@/types/auth';

export const postLogin = async ({ token }: Omit<AuthRequest, 'accessKey'>) => {
  const response = await http.post<AuthRequest, UserResponse>(
    `${ENDPOINT.AUTH}`,
    {
      accessKey: AUTH_ACCESS_KEY,
      token,
    },
  );

  return response;
};
