import { http, HttpResponse } from 'msw';

import { BASE_URL } from '@/apis/config';
import { ENDPOINT } from '@/apis/endPoint';

export const ScholarshipHandlers = [
  http.post(BASE_URL + `${ENDPOINT.SCHOLARSHIP_APPLY}/:studentId`, () => {
    return HttpResponse.json({}, { status: 200 });
  }),
];
