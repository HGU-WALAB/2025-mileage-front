import { BASE_URL } from '@/apis/config';
import { ENDPOINT } from '@/apis/endPoint';
import { mockAwardList } from '@/mocks/fixtures/award';
import { Error500, randomMswError } from '@/utils/mswError';
import { http, HttpResponse } from 'msw';

export const AwardHandlers = [
  http.get(BASE_URL + `${ENDPOINT.AWARD}`, () => {
    const { is500Error } = randomMswError();
    if (is500Error) return Error500();

    return HttpResponse.json(mockAwardList, { status: 200 });
  }),
];
