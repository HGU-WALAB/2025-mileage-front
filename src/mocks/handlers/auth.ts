import { BASE_URL } from '@/apis/config';
import { ENDPOINT } from '@/apis/endPoint';
import { mockUserData } from '@/mocks/fixtures/auth';
import { Error401, Error500, randomMswError } from '@/utils/mswError';
import { http, HttpResponse } from 'msw';

export const AuthHandlers = [
  http.post(BASE_URL + `${ENDPOINT.AUTH}/login`, () => {
    const { is500Error } = randomMswError();
    if (is500Error) return Error500();

    return HttpResponse.json(mockUserData, { status: 200 });
  }),

  http.post(BASE_URL + `${ENDPOINT.AUTH}/logout`, () => {
    const { is500Error } = randomMswError();
    if (is500Error) return Error500();

    return HttpResponse.json({}, { status: 200 });
  }),

  http.get(BASE_URL + `${ENDPOINT.USER}`, () => {
    const { is401Error, is500Error } = randomMswError();

    if (is401Error) return Error401();
    if (is500Error) return Error500();

    return HttpResponse.json(mockUserData, { status: 200 });
  }),
];
