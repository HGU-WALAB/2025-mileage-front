import { ENDPOINT } from '@/apis/endPoint';
import { http } from '@/apis/http';
import { CapabilityResponse } from '@/types/capability';

export const getCapability = async ({ studentId }: { studentId: string }) => {
  const response = await http.get<{ data: CapabilityResponse[] }>(
    `${ENDPOINT.CAPABILITY}/${studentId}`,
  );

  return response.data;
};
