import { http, HttpResponse } from 'msw';

import { BASE_URL } from '@/apis/config';
import { ENDPOINT } from '@/apis/endPoint';
import { mockScholarshipDuration } from '@/mocks/fixtures/scholarshipDuration';
import { Error400, Error401, Error500, randomMswError } from '@/utils/mswError';

export const ScholarshipHandlers = [
  http.post(BASE_URL + `${ENDPOINT.SCHOLARSHIP_APPLY}/:studentId`, () => {
    const { is400Error, is401Error, is500Error } = randomMswError();

    if (is400Error) return Error400('이미 신청한 학생입니다.');
    if (is401Error) return Error401();
    if (is500Error) return Error500();

    return HttpResponse.json({}, { status: 200 });
  }),
  http.get(BASE_URL + `${ENDPOINT.SCHOLARSHIP_APPLY}/:studentId`, () => {
    const { isRandom } = randomMswError();

    if (isRandom) return HttpResponse.json({ isApply: 1 }, { status: 200 });
    return HttpResponse.json({ isApply: 0 }, { status: 200 });
  }),
  http.get(BASE_URL + `${ENDPOINT.SCHOLARSHIP_APPLY}`, () => {
    const { is500Error } = randomMswError();

    if (is500Error) return Error500();
    return HttpResponse.json(mockScholarshipDuration, { status: 200 });
  }),
];
