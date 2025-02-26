import { http, HttpResponse } from 'msw';

import { BASE_URL } from '@/apis/config';
import { ENDPOINT } from '@/apis/endPoint';
import { mockUserData } from '@/mocks/fixtures/auth';
import { Error401, Error500, randomMswError } from '@/utils/mswError';

export const AuthHandlers = [
  http.post(BASE_URL + `${ENDPOINT.AUTH}`, () => {
    const { is500Error } = randomMswError();
    if (is500Error) return Error500();

    return HttpResponse.json(mockUserData, { status: 200 });
  }),

  http.get(BASE_URL + `${ENDPOINT.USER}/:studentId`, () => {
    const { is401Error, is500Error } = randomMswError();

    if (is401Error) return Error401();
    if (is500Error) return Error500();

    return HttpResponse.json(mockUserData, { status: 200 });
  }),
];
