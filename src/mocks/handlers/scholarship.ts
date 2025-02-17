import { http, HttpResponse } from 'msw';

import { BASE_URL } from '@/apis/config';
import { ENDPOINT } from '@/apis/endPoint';
import { Error400, Error401, Error500, randomMswError } from '@/utils/mswError';

export const ScholarshipHandlers = [
  http.post(BASE_URL + `${ENDPOINT.SCHOLARSHIP_APPLY}/:studentId`, () => {
    const { is400Error, is401Error, is500Error } = randomMswError();

    if (is400Error)
      return Error400('이미 신청된 학생이거나 존재하지 않는 학생입니다.');
    if (is401Error) return Error401();
    if (is500Error) return Error500();

    return HttpResponse.json({}, { status: 200 });
  }),
];
