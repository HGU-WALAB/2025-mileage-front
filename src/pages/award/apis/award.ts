import { ENDPOINT } from '@/apis/endPoint';
import { http } from '@/apis/http';

import { AwardResponse } from '../types/award';

export const getAwardList = async () => {
  const response = await http.get<AwardResponse[]>(`${ENDPOINT.AWARD}`);
  return response;
};
