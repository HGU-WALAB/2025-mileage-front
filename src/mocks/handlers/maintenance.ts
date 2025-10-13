import { BASE_URL } from '@/apis/config';
import { http, HttpResponse } from 'msw';

export const MaintenanceHandlers = [
  http.get(BASE_URL + '/api/maintenance/status', () => {
    // 점검 모드가 아닌 상태를 반환
    return HttpResponse.json(
      {
        maintenanceMode: false,
        message: '',
        estimatedTime: '',
        isAllowedUser: false,
      },
      { status: 200 }
    );
  }),
];


