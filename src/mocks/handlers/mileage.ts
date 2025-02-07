import { http, HttpResponse } from 'msw';

import { BASE_URL } from '@/apis/config';
import { ENDPOINT } from '@/apis/endPoint';
import { mileageList } from '@/mocks/fixtures/mileageList';

export const MileageHandlers = [
  http.get(BASE_URL + `${ENDPOINT.MILEAGE}/:studentId/search`, () => {
    return HttpResponse.json(mileageList, { status: 200 });
  }),
];
